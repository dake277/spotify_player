import * as types from '../actionTypes'
import { viewType } from '../constants'

const defaultState = {
    currentlyPlaying: null,
    currentTrackState: types.TRACK_STATE_STOPPED,
    timeElapsed: 0,
    viewType: viewType.RECENTLY_PLAYED,
  }
  
  export const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.UPDATE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.view
      }
  
    case types.PLAY_SONG:
      return {
        ...state,
        currentlyPlaying: action.song,
        currentTrackState: types.TRACK_STATE_PLAYING,
        timeElapsed: 0,
      }
  
    case types.STOP_SONG:
      return {
        ...state,
        currentTrackState: types.TRACK_STATE_STOPPED,
        timeElapsed: 0,
      }
  
    case types.PAUSE_SONG:
      return {
        ...state,
        currentTrackState: types.TRACK_STATE_PAUSED,
      }
  
    case types.RESUME_SONG:
      return {
        ...state,
        currentTrackState: types.TRACK_STATE_PLAYING,
      }
  
    case types.INCREASE_SONG_TIME:
      return {
        ...state,
        timeElapsed: action.time
      }
  
    default:
      return state
    }
  
  }
  
  export default playerReducer