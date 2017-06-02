
import albums from './albums';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	console.log(state);
    return {
        albums: state.albums.albums
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => {
      dispatch({
        type: 'ALBUMS_FETCH_REQUESTED',
      })
    }
  }
}


const albumsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(albums)

export default albumsContainer;
