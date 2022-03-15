import { combineReducers } from 'redux'
import tokenReducer from './token'
import albumReducer from './album'
import artistReducer from './artist'
import userRecommendReducer from './user-recommend'
import songReducer from './song'
import userReducer from './user'
import uiReducer from './ui'
import playlistReducer from './playlist'
import soundReducer from './sound'
import playerReducer from './player'


export default combineReducers({
    tokenReducer,
    albumReducer,
    artistReducer,
    userRecommendReducer,
    songReducer,
    userReducer,
    uiReducer,
    playlistReducer,
    soundReducer,
    playerReducer
})