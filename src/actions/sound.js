import * as types from '../actionTypes'

export const updateVolume = volume => {
    return { type: types.UPDATE_VOLUME, volume }
}