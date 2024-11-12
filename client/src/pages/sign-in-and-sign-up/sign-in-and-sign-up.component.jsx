import React from 'react';
import {  useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component.';
import SignUp from '../../components/sign-up/sign-up.component';
import selectCurrentUser from '../../reducer/user/user.selectors';
import {SignInAndSignUpContainer} from "./sign-in-and-sign-up.styles"


const SignInAndSignUp = () => {
    const currentUser = useSelector(selectCurrentUser)
    if(currentUser){
        return <Navigate to="/" />;
    } else {
        return( 
        <SignInAndSignUpContainer >
           
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
        )
    }
}

export default (SignInAndSignUp);