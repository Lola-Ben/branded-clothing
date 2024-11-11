import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionId) => createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections(key)).filter(collection => collection["routeName"] === collectionId) : null
)

export const selectCategory = createSelector(
    [selectCollections],
    categories => categories ? Object.entries(categories) : null
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