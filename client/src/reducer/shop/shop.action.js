import { ShopActionTypes } from "./shop.action.types";


export const fetchCollectionStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionFailure = (errorMessage) =>({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage,
})

export const fetchCollectionSuccess = (collections) =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})