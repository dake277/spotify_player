import { put , call } from 'redux-saga/effects'
import { 
    fetchSongsSuccess,
    fetchSongsFailure,
    searchSongsSuccess,
    searchSongsFailure,
    fetchRecentlyPlayedSuccess,
    fetchRecentlyPlayedFailure
 } from '../actions/song'
import uniqBy from 'lodash/uniqBy' 
import api from '../api'
import { setArtistIds, setRecentlyPlayedArtists } from '../actions/artist';

export function * fetchSongsSaga(action) {
    try {
        const res = yield call(api.songs.fetchSongs,action.accessToken)
        const artistIds = uniqBy(res, (item) => 
            item.track.artists[0].name).map(item => 
                item.track.artists[0].id).join(',')
        
                
        yield put(setArtistIds(artistIds))
        yield put(fetchSongsSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchSongsFailure(err))
    }
}


export function * searchSongsSaga(action) {
    const { accessToken , searchTerm } = action
    try {
        const res = yield call(api.songs.searchSongs,accessToken,searchTerm)
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        yield put(searchSongsSuccess(res))
    } catch(err) {
        yield put(searchSongsFailure(err))
    }
}

export function * fetchRecentlyPlayedSaga(action) {
    const { accessToken } = action
    try {
        const res = yield call(api.songs.fetchRecentlySongs,accessToken)
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        const recentlyPlayedSongs = uniqBy(res,item => item.track.id)

        const artistIds = uniqBy(res, (item) => 
        item.track.artists[0].name).map(item => 
            item.track.artists[0].id).join(',')
            
        yield put(setRecentlyPlayedArtists(artistIds))
        yield put(fetchRecentlyPlayedSuccess(recentlyPlayedSongs))
    } catch(err) {
        yield put(fetchRecentlyPlayedFailure(err))
    }
}
