import { ShopActionTypes } from "./shop.action.types";
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ""
}


const shopReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
   switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
        return {
            ...state,
            isFetching: true,
        }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            collections: payload
        }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
            ...state,
            isFetching: true,
            errorMessage: payload
        }

    default:
        return state;
   }
}

export default shopReducer;

