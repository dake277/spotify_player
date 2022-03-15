import { put , call } from 'redux-saga/effects'
import { 
    fetchCategorySuccess,
    fetchCategoryFailure,
    fetchNewReleasesSuccess,
    fetchNewReleasesFailure,
    fetchFeaturedSuccess,
    fetchFeaturedFailure
} from '../actions/user-recommend'
import api from '../api'

export function * fetchCategoriesSaga(action) {
    try {
        const { accessToken } = action
        const res = yield call(api.browse.fetchCategories,accessToken)
        yield put(fetchCategorySuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchCategoryFailure(err))
    }
} 

export function * fetchNewReleasesSaga(action) {
    try {
        const { accessToken } = action
        const res = yield call(api.browse.fetchNewReleases,accessToken)
        yield put(fetchNewReleasesSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchNewReleasesFailure(err))
    }
} 

export function * fetchFeaturedSaga(action) {
    try {
        const { accessToken } = action
        const res = yield call(api.browse.fetchFeatured,accessToken)
        yield put(fetchFeaturedSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchFeaturedFailure(err))
    }
} 
