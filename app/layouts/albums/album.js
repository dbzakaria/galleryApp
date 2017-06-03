import React, { Component } from 'react';

import { connect } from 'react-redux';

import {  Text, View , ScrollView , TouchableOpacity , Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';

 class Album extends Component {

  constructor(props) {
    super(props);
    console.log('Album_constructor');

    if (this.props.album !== undefined) {
  
      //console.log("props.album: ", this.props.album.id);
      var album_id = this.props.album.id;
      this.props.fetchAlbumFirstPhoto(album_id);

      var album = this.props.album;
      var firstPhoto = this.props.albumFirstPhoto;
    } else {
      console.log('props.album is undefined')
    }
  }


	handlePress = () => {
    	//Alert.alert(this.props.album.id.toString());
    	// make call to fetch photos given album id
    	
    	// go to photos page
    	Actions.photos({album: this.props.album});

  	}

    shouldComponentUpdate = (nextProps, nextState) => {
      return (this.props.album === null && nextProps.album !== null);
    }


  	render () {

      var album = this.props.album;
      console.log('Album.render', album.id);
  		
      var firstPhoto = this.props.albumFirstPhoto;

  		return (
  			<View>
  				<TouchableOpacity onPress={this.handlePress} >
          	<Text style={{ padding: 10}}>
            	{album.title}
          	</Text>
          </TouchableOpacity>
  			</View>
  		);
  	}
	
}

const mapStateToProps = (state) => {
    return {
        albumFirstPhoto: state.albums.albumFirstPhoto,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbumFirstPhoto: (album_id) => {
      dispatch({
        type: 'GET_ALBUM_FIRST_PHOTO',
        payload: {
          album_id: album_id
        }
      })
    }
  }
}


const albumContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Album)

export default albumContainer;