import React, { Component } from 'react';

import { connect } from 'react-redux';

import {  Text, View , ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import {  ListItem, Thumbnail, Body } from 'native-base';

 class Album extends Component {

  constructor(props) {
    super(props);

    if (this.props.album !== undefined) {
      var album_id = this.props.album.id;
      this.props.fetchAlbumFirstPhoto(album_id);

      var album = this.props.album;
    } 
  }

	handlePress = () => {
    Actions.photos({album: this.props.album});

  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (this.props.album === null && nextProps.album !== null);
  }


  render () {

    var album = this.props.album;

		return (
      <View>
        <ListItem onPress={this.handlePress}>
          <Thumbnail square size={80} source={{ uri: 'http://placehold.it/150/92c952' }}  style={{right: 5}} />
            <Body>
              <Text>{album.title}</Text>
            </Body>
        </ListItem>
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