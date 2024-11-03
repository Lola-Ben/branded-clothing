import { ShopActionTypes } from "./shop.action.types";

export const UpdateCollections = collections => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
})