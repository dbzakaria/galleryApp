import { takeEvery, takeLatest } from 'redux-saga'

import { call, put, select } from 'redux-saga/effects'

import api from '../../api'

function * fetchAlbums(action) {
    try{

        const response = yield call(api.getAlbums);
         if (response.errors){
            console.log('show errors')
         }else{
            yield put({ type: 'GET_ALBUMS', albums: response })
         }
    } catch(err) {
        console.log(err);
    }

}

export function * albumsSagas() {
    yield [
        takeEvery("ALBUMS_FETCH_REQUESTED", fetchAlbums)
    ]
}