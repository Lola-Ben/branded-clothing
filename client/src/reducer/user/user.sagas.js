import { takeLatest, call, put, all } from "redux-saga/effects";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser, SignOut,  } from "../../firebase/firebase.utils";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getDoc } from "firebase/firestore";

import userActionTypes from "./user.types";

import {signInSuccess, signInFailure,  signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user.action";


export function* getSnapShotAuthUser(AuthUser, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, AuthUser, additionalData)
        const userSnapShot = yield getDoc(userRef)
        const currentUser = yield {id: userSnapShot.id, ...userSnapShot.data()}
        yield put(signInSuccess(currentUser))
    } catch (error) {
        yield put(signInFailure(error.message))
    }
    
}

export function* signInWithGoogle(){

    try {
        const {user} = yield signInWithPopup(auth, googleProvider)
        yield getSnapShotAuthUser(user)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try {
      const {user} = yield signInWithEmailAndPassword(auth, email, password)
      yield getSnapShotAuthUser(user) 
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* isUserAuthenticated(){
    try {
       const userAuth = yield getCurrentUser();
       if (!userAuth) return;
       yield getSnapShotAuthUser(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOut(){
    try {
        yield SignOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload: {displayName, email, password }}){
    
    try {
      
        const {user} =  yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({userAuth: {user}, additionalData: {displayName}}))
        
    } catch (error) {
        yield put(signUpFailure(error));
    }

}

export function* signInAfterSignUp({payload: {userAuth, additionalData}}){
    try {
        yield put(signInSuccess(getSnapShotAuthUser(userAuth, additionalData)))
    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}



export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas(){
     yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated), 
        call(onSignOutStart), 
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}
