import { takeLatest } from 'redux-saga/effects'
import * as types from '../actionTypes'
import { fetchAlbumSaga } from './albumsSaga'
import { fetchArtistSaga,fetchRecentlyArtistSaga } from './artistsSaga'
import { 
    fetchCategoriesSaga,
    fetchFeaturedSaga,
    fetchNewReleasesSaga
 } from './userRecommendSaga'
import { createPlaylistSaga, fetchPlaylistMenuSaga , fetchPlaylistSongsSaga } from './playlistsSaga'
import { 
    fetchSongsSaga,
    searchSongsSaga,
    fetchRecentlyPlayedSaga
} from './songsSaga'
import { fetchUserSaga, addSongToLibrarySaga } from './userSaga';






function *rootSaga() {
    yield takeLatest(types.FETCH_RECENTLY_ARTIST_REQUEST,fetchRecentlyArtistSaga)
    yield takeLatest(types.FETCH_SONGS_REQUEST,fetchSongsSaga)
    yield takeLatest(types.FETCH_ALBUM_REQUEST,fetchAlbumSaga)
    yield takeLatest(types.FETCH_ARTIST_REQUEST,fetchArtistSaga)
    yield takeLatest(types.SEARCH_SONGS_REQUEST,searchSongsSaga)
    yield takeLatest(types.FETCH_RECENTLY_PLAYED_REQUEST,fetchRecentlyPlayedSaga)
    yield takeLatest(types.FETCH_PLAYLIST_MENU_REQUEST,fetchPlaylistMenuSaga)
    yield takeLatest(types.FETCH_PLAYLIST_SONGS_REQUEST,fetchPlaylistSongsSaga)
    yield takeLatest(types.FETCH_CATEGORIES_REQUEST,fetchCategoriesSaga)
    yield takeLatest(types.FETCH_FEATURED_REQUEST,fetchFeaturedSaga)
    yield takeLatest(types.FETCH_NEW_RELEASES_REQUEST,fetchNewReleasesSaga)
    yield takeLatest(types.FETCH_USER_REQUEST,fetchUserSaga)
    yield takeLatest(types.ADD_SONG_TO_LIBRARY_REQUEST,addSongToLibrarySaga)
    yield takeLatest(types.CREATE_PLAYLIST_REQUEST, createPlaylistSaga)
}


export default rootSaga