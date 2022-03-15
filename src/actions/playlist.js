import * as types from '../actionTypes'


export const fetchPlaylistMenuRequest = (accessToken,userId) => {
    return { type : types.FETCH_PLAYLIST_MENU_REQUEST , accessToken, userId }
}  
export const fetchPlaylistMenuSuccess = playlists => {
    return { type : types.FETCH_PLAYLIST_MENU_SUCCESS , playlists }
}  
export const fetchPlaylistMenuFailure = () => {
    return { type : types.FETCH_PLAYLIST_MENU_FAILURE }
}  
export const addPlaylistItem = playlist => {
    return { type : types.ADD_PLAYLIST_ITEM , playlist }
} 


export const createPlaylistRequest = (accessToken, userId, data) => {
    return { type: types.CREATE_PLAYLIST_REQUEST, accessToken, userId, data}
}
export const createPlaylistSuccess = (playlist) => {
    return { type : types.CREATE_PLAYLIST_SUCCESS, playlist }
}  
export const createPlaylistFailure = (err) => {
    return { type : types.CREATE_PLAYLIST_FAILURE, err }
}  



export const fetchPlaylistSongsRequest = (userId,playlistId,accessToken) => {
    return { type : types.FETCH_PLAYLIST_SONGS_REQUEST ,userId, playlistId, accessToken}
}  
export const fetchPlaylistSongsFailure = (err) => {
    return { type : types.FETCH_PLAYLIST_SONGS_FAILURE, err }
}  
export const fetchPlaylistSongsSuccess = songs => {
    return { type : types.FETCH_PLAYLIST_SONGS_SUCCESS , songs }
}  

