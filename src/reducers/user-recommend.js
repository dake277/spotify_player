import * as types from '../actionTypes'

export const userRecommendReducer = (state = {}, action) => {
    switch (action.type) {
    case types.FETCH_CATEGORIES_REQUEST : return { ...state }
    case types.FETCH_CATEGORIES_SUCCESS :
      return {
        ...state,
        view: action.categories.items,
        fetchCategoriesFailure: false
      }
  
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        fetchCategoriesFailure: true
      }
    case types.FETCH_NEW_RELEASES_REQUEST : return { ...state }
    case types.FETCH_NEW_RELEASES_SUCCESS :
      return {
        ...state,
        view: action.newReleases.items,
        fetchNewReleasesFailure: false
      }
  
    case types.FETCH_NEW_RELEASES_FAILURE :
      return {
        ...state,
        fetchNewReleasesFailure: true
      }
    case types.FETCH_FEATURED_REQUEST : return {...state}
    case types.FETCH_FEATURED_SUCCESS :
      return {
        ...state,
        view: action.featured.items,
        fetchFeaturedFailure: false
      }
  
    case types.FETCH_FEATURED_FAILURE:
      return {
        ...state,
        fetchFeaturedFailure: true
      }
  
    default:
      return state
    }
  }
  
  export default userRecommendReducer