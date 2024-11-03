import { createSelector } from "reselect";


const selectShop = state => state.shop;

const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCategory = createSelector(
    [selectCollections],
    categories => categories ? Object.entries(categories) : []
)



export default selectCollections;