import * as types from '../actionTypes'


export const fetchSongs = accessToken => {
  return { type: types.FETCH_SONGS_REQUEST , accessToken }
}
export const fetchSongsSuccess = songs => {
    return { type: types.FETCH_SONGS_SUCCESS , songs }
}
export const fetchSongsFailure = () => {
    return { type: types.FETCH_SONGS_FAILURE }
}



export const searchSongs = (accessToken,searchTerm) => {
    return { type: types.SEARCH_SONGS_REQUEST }
}
export const searchSongsSuccess = songs => {
    return { type: types.SEARCH_SONGS_SUCCESS , songs }
}
export const searchSongsFailure = () => {
    return { type: types.SEARCH_SONGS_FAILURE }
}

export const fetchRecentlyPlayedSongs = (accessToken) => {
  return { type: types.FETCH_RECENTLY_PLAYED_REQUEST, accessToken }
}
export const fetchRecentlyPlayedSuccess = songs => {
  return { type: types.FETCH_RECENTLY_PLAYED_SUCCESS , songs }
}
export const fetchRecentlyPlayedFailure = () => {
  return { type: types.FETCH_RECENTLY_PLAYED_FAILURE }
}


