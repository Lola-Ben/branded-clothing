import {call, all, takeLatest, put} from "redux-saga/effects";

import { getCollectionsAndDocuments } from "../../firebase/firebase.utils"
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import { ShopActionTypes } from "./shop.action.types";



export function* fetchCollectionsStartAsync(){
        try {
            const collections = yield call(getCollectionsAndDocuments, "collection")
            yield put(fetchCollectionSuccess(collections))
        } catch (error) {
            yield put(fetchCollectionFailure(error))
        }
}


export function* onFetchCollectionStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}


export function* shopSagas(){
    yield all([call(onFetchCollectionStart)])
}