import { takeEvery, takeLatest } from 'redux-saga'

import { call, put, select } from 'redux-saga/effects'

import api from '../../api'


function * fetchPhotos(action) {
    try{

        const response = yield call(api.getAlbumPhotos , action.payload.album_id );
    
         if (response.errors){
            console.log('show errors')
         }else{

            yield put({ type: 'GET_PHOTOS', photos: response })
         }
    } catch(err) {
        console.log(err);
    }

}

/*function * fetchPhotoDetail(action) {
    try{

        const response = yield call(api.getPhotoDetails);
      
         if (response.errors){
            console.log('show errors')
         }else{
            yield put({ type: 'GET_PHOTO_DETAILS', details: response })
         }
    } catch(err) {
        console.log(err);
    }

}*/

export function * photosSagas() {
    yield [
        takeEvery("PHOTOS_FETCH_REQUESTED", fetchPhotos)
        //takeEvery("PHOTO_DETAILS_FETCH_REQUESTED", fetchPhotos)
    ]
}