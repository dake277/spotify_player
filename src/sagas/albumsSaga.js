import { put , call } from 'redux-saga/effects'
import { fetchAlbumSuccess , fetchAlbumFailure } from '../actions/album'
import api from '../api'


export function * fetchAlbumSaga(action) {
    try {
        const res = yield call(api.albums,action.accessToken)
        yield put(fetchAlbumSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchAlbumFailure(err))
    }
} 
