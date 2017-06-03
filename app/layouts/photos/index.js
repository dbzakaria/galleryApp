
import photos from './photos';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        photos: state.photos.photos
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (album_id) => {
      dispatch({
        type: 'PHOTOS_FETCH_REQUESTED',
        payload: {
          album_id: album_id
        }
      })
    }
  }
}


const photosContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(photos)

export default photosContainer;
