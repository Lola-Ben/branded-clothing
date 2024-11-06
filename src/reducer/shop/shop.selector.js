import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCategory = createSelector(
    [selectCollections],
    categories => categories ? Object.entries(categories) : []
)

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

export default selectCollections;