import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => {
        let collection = collections.filter(collection => 
            collection.title.toLowerCase() === collectionUrlParam)
        collection = Object.keys(collection).map(key => collection[key])[0]
        return collection
    }
)

