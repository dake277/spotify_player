import * as types from '../actionTypes'

export const soundReducer = (state = { volume: 100}, action) => {
    switch (action.type) {
    case types.UPDATE_VOLUME:
      return {
        volume: action.volume
      }
  
    default:
      return state
    }
  
  }
  
  export default soundReducer