import * as types from '../actionTypes'

const defaultState = {
    artistIds: '',
    recentlyPlayedArtistIds: '',
    fetchRecentlyArtistsRequest: true,
    fetchArtistsRequest:true
  }
  
  export const artistsReducer = (state = defaultState, action) => {
  
    switch (action.type) {
  
    case types.SET_ARTIST_IDS:
      return {
        ...state,
        artistIds: action.artistIds
      }
    
      case types.SET_RECENTLY_PLAYED_ARTISTS:
      return {
        ...state,
        recentlyPlayedArtistIds: action.artistIds
      }
  
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        fetchArtistsRequest: true
      }
  
    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artistList: action.artists,
        fetchArtistsFailure: false,
        fetchArtistsRequest: false
      }
  
    case types.FETCH_ARTIST_FAILURE:
      return {
        ...state,
        fetchArtistsFailure: true,
        fetchArtistsRequest: false
      }



      case types.FETCH_RECENTLY_ARTIST_REQUEST:
        return {
          ...state,
          fetchArtistsRequest: true
        }
    
      case types.FETCH_RECENTLY_ARTIST_SUCCESS:
        return {
          ...state,
          recentlyArtistList: action.artists.artists,
          fetchRecentlyArtistsFailure: false,
          fetchRecentlyArtistsRequest: false
        }
    
      case types.FETCH_RECENTLY_ARTIST_FAILURE:
        return {
          ...state,
          fetchRecentlyArtistsFailure: true,
          fetchRecentlyArtistsRequest: false
        }
  
    default:
      return state
    }
  }
  
  export default artistsReducer