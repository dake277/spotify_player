import * as types from '../actionTypes'
import { viewType, libraryView } from '../constants'

const defaultState = {
    title: viewType.USER_LIBRARY,
    library: libraryView.PLAYLISTS
  }
  
  export const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
  
    case types.UPDATE_HEADER_TITLE:
      return {
        ...state,
        title: action.title
      }

    case types.UPDATE_LIBRARY_VIEW:
      return {
        ...state,
        library: action.title
      }
  
    default:
      return state
    }
  
  }
  
  export default uiReducer