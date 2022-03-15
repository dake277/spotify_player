import * as types from '../actionTypes'

export const userReducer = (state = {}, action) => {

    switch (action.type) {
    case types.FETCH_USER_REQUEST : return { ...state }
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        fetchUserFailure: false
      }
  
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        fetchUserFailure: true
      }
    case types.ADD_SONG_TO_LIBRARY_REQUEST : return { ...state }
    case types.ADD_SONG_TO_LIBRARY_SUCCESS:
      return {
        ...state,
        songAddedToLibrary: true,
        songId: action.songId
      }
  
    case types.ADD_SONG_TO_LIBRARY_FAILURE:
      return {
        ...state,
        songAddedToLibrary: false
      }
  
    default:
      return state
    }
  
  }
  
  export default userReducer