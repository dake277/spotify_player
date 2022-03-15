import { put , call } from 'redux-saga/effects'
import { fetchUserSuccess , fetchUserFailure , addSongToLibrarySuccess , addSongToLibraryFailure } from '../actions/user'
import api from '../api'

export function * fetchUserSaga(action) {
    try {
        const { accessToken } = action
        const res = yield call(api.user.fetchUser,accessToken)
        yield put(fetchUserSuccess(res))   
    } catch(err) {
        if(err) {
            window.location.href = './'
        }
        yield put(fetchUserFailure(err))
    }
} 

export function * addSongToLibrarySaga(action) {
    try {
        const { accessToken , id } = action
        const res = yield call(api.user.addSongToLibrary,accessToken,id)
        if(res.ok){
            yield put(addSongToLibrarySuccess(res))   
        }
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(addSongToLibraryFailure(err))
    }
} 
