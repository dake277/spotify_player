import * as types from '../actionTypes'

export const playlistReducer = (state = {}, action) => {
    switch (action.type) {
  
    case types.FETCH_PLAYLIST_MENU_REQUEST:
      return {
        ...state,
        fetchPlaylistRequest: true,
      }
  
    case types.FETCH_PLAYLIST_MENU_SUCCESS:
      return {
        ...state,
        playlistMenu: action.playlists,
        playlists: action.playlists,
        fetchPlaylistFailure: false,
        fetchPlaylistRequest: false,
      }

    case types.CREATE_PLAYLIST_REQUEST:
      return {
        ...state,
        createPlaylistRequest: true,
      }
  
    case types.CREATE_PLAYLIST_SUCCESS:
      return {
        ...state,
        createdPlaylist: action.playlist,
        createPlaylistFailure: false,
        createPlaylistRequest: false,
      }

    case types.CREATE_PLAYLIST_FAILURE:
      return {
        ...state,
        createPlaylistFailure: true,
        createPlaylistRequest: false,
      }
  
    case types.ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlists: [
          ...state.playlists,
          action.playlist
        ]
      }
  
    case types.FETCH_PLAYLIST_MENU_FAILURE:
      return {
        ...state,
        fetchPlaylistFailure: true,
        fetchPlaylistRequest: false,
      }
  
    default:
      return state
    }
  }
  
  export default playlistReducer