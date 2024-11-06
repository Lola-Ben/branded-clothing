
import { getCollectionsAndDocuments } from "../../firebase/firebase.utils";


import { ShopActionTypes } from "./shop.action.types";

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSucces = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionStartAsync = () => {
    return dispatch => {

        const getCollectionsMap = async () => {
            dispatch(fetchCollectionStart())
            const collections = await getCollectionsAndDocuments("collections")
             dispatch(fetchCollectionSucces(collections))
          }
          
          try {
            getCollectionsMap();
          } catch (error) {
              dispatch(fetchCollectionFailure(error.message))
          }
    }

}