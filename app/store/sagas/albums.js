
import { call, put, select, takeEvery } from 'redux-saga/effects'

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

function * fetchAlbumFirstPhoto(action) {
    try {

        const response = yield call(api.getAlbumPhotos , action.payload.album_id );
         if (response.errors){
            console.log('show errors')
         }else{
            yield put({ type: 'GET_ALBUM_FIRST_PHOTO', albumFirstPhoto: response[0] })
         }
    } catch(err) {
        console.log(err);
    }
}

export function * albumsSagas() {
    yield [
        takeEvery("ALBUMS_FETCH_REQUESTED", fetchAlbums),
        takeEvery("GET_ALBUM_FIRST_PHOTO", fetchAlbumFirstPhoto)
    ]
}