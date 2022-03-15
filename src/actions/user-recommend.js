import * as types from '../actionTypes'


export const fetchCategoryRequest = () => {
    return { type : types.FETCH_CATEGORIES_REQUEST }
}
export const fetchCategorySuccess = categories => {
    return { type : types.FETCH_CATEGORIES_SUCCESS , categories }
}
export const fetchCategoryFailure = () => {
    return { type : types.FETCH_CATEGORIES_FAILURE }
}  


export const fetchNewReleasesRequest = () => {
    return { type : types.FETCH_NEW_RELEASES_REQUEST }
}
export const fetchNewReleasesSuccess = newReleases => {
    return { type : types.FETCH_NEW_RELEASES_SUCCESS , newReleases }
}  
export const fetchNewReleasesFailure = () => {
    return { type : types.FETCH_NEW_RELEASES_FAILURE }
}  


export const fetchFeaturedRequest = () => {
    return { type : types.FETCH_FEATURED_REQUEST }
}
export const fetchFeaturedSuccess = featured => {
    return { type : types.FETCH_FEATURED_SUCCESS , featured }
}  
export const fetchFeaturedFailure = () => {
    return { type : types.FETCH_FEATURED_FAILURE }
}  