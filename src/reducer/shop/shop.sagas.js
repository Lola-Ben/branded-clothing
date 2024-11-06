import { takeLatest, call, put, all } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.action.types";

import { getCollectionsAndDocuments } from "../../firebase/firebase.utils";
import { fetchCollectionFailure, fetchCollectionSucces } from "./shop.action";

export function* fetchCollectionsStartAsync(){
    try {
        const collections = yield  call(getCollectionsAndDocuments, "collections")
        yield put(fetchCollectionSucces(collections))
    } catch (error) {
        put(fetchCollectionFailure(error.message))
    }
      
}

export function* fetchCollectionsStart(){
      yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync,
      )     
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}