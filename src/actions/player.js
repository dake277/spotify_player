import * as types from '../actionTypes'


export const play = song => {
    return { type: types.PLAY_SONG , song }
  }
  
  export const stop = () => {
    return { type: types.STOP_SONG }
  }
  
  export const pause = () => {
    return { type: types.PAUSE_SONG }
  }
  
  export const resume = () => {
    return { type: types.RESUME_SONG }
  }
  
  export const increaseSongTime = time => {
    return { type: types.INCREASE_SONG_TIME , time }
  }
  
  export const updateViewType = view => {
    return { type: types.UPDATE_VIEW_TYPE , view }
  }