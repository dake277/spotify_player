import * as types from '../actionTypes'
import { viewType } from '../constants'

const defaultState = {
    fetchSongsRequest: true,
    fetchRecentlySongsRequest: true,
  }
  
  export const songsReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.UPDATE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.view
      }
  
    case types.FETCH_SONGS_REQUEST:
      return {
        ...state,
        fetchSongsRequest: true
      }
  
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        fetchSongsFailure: false,
        fetchSongsRequest: false,
        viewType: viewType.SONGS
      }
  
    case types.FETCH_SONGS_FAILURE:
      return {
        ...state,
        fetchSongsFailure: true,
        fetchSongsRequest: false
      }

 // search

    case types.SEARCH_SONGS_REQUEST:
      return {
        ...state,
        searchSongsRequest: true
      }
  
    case types.SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        searchSongsFailure: false,
        searchSongsRequest: false,
        viewType: viewType.SEARCH
      }
  
    case types.SEARCH_SONGS_FAILURE:
      return {
        ...state,
        searchSongsFailure: true,
        searchSongsRequest: false
      }

      // recently played songs
  
    case types.FETCH_RECENTLY_PLAYED_REQUEST:
      return {
        ...state,
        fetchRecentlySongsRequest: true,

      }
  
    case types.FETCH_RECENTLY_PLAYED_SUCCESS:
      return {
        ...state,
        recentlySongs: action.songs,
        viewType: viewType.RECENTLY_PLAYED,
        fetchRecentlySongsFailure: false,
        fetchRecentlySongsRequest: false
      }
  
    case types.FETCH_RECENTLY_PLAYED_FAILURE:
      return {
        ...state,
        fetchRecentlySongsFailure: true,
        fetchRecentlySongsRequest: false
      }
  
    case types.FETCH_PLAYLIST_SONGS_REQUEST:
      return {
        ...state,
        fetchPlaylistSongsRequest: true
      }
  
    case types.FETCH_PLAYLIST_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        viewType: viewType.PLAYLIST,
        fetchPlaylistSongsFailure: false,
        fetchPlaylistSongsRequest: false
      }
  
    case types.FETCH_PLAYLIST_SONGS_FAILURE:
      return {
        ...state,
        fetchPlaylistSongsFailure: true,
        fetchPlaylistSongsRequest: false
      }
  
    case types.FETCH_ARTIST_SONGS_REQUEST:
      return {
        ...state,
        fetchArtistSongsRequest: true
      }
  
    case types.FETCH_ARTIST_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        viewType: viewType.ARTIST,
        fetchArtistSongsFailure: false,
        fetchArtistSongsRequest: false
      }
  
    case types.FETCH_ARTIST_SONGS_FAILURE:
      return {
        ...state,
        fetchArtistSongsFailure: true,
        fetchArtistSongsRequest: false
      }
  
    default:
      return state
    }
  
  }
  
  export default songsReducer