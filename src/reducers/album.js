import * as types from '../actionTypes'

export const albumReducer = (state = {},action) => {
    switch(action.type){
        case types.FETCH_ALBUM_REQUEST : 
            return {
                ...state,
                fetchingAlbum : true
            }
        case types.FETCH_ALBUM_SUCCESS :
            return {
                ...state,
                albums : action.albums,
                fetchingAlbum : false,
                fetchAlbumFailure : false
            }
        case types.FETCH_ALBUM_FAILURE :
            return {
                ...state,
                fetchingAlbum : false,
                fetchAlbumFailure : true
            }
        default : return state
    }
}

export default albumReducer