import * as types from '../actionTypes'

export const fetchUserRequest = (accessToken) => {
    return { type: types.FETCH_USER_REQUEST, accessToken }
}
  

export const fetchUserSuccess = user => {
    return { type: types.FETCH_USER_SUCCESS , user }
}
  
export const fetchUserFailure = () => {
    return { type: types.FETCH_USER_FAILURE }
}


export const addSongToLibraryRequest = (accessToken,id) => {
    return { type: types.ADD_SONG_TO_LIBRARY_REQUEST }
}
  
export const addSongToLibrarySuccess = songId => {
    return { type: types.ADD_SONG_TO_LIBRARY_SUCCESS , songId }
}
  
export const addSongToLibraryFailure = () => {
    return { type: types.ADD_SONG_TO_LIBRARY_FAILURE }
}
  
