import React, { Component } from 'react';

import {  View } from 'react-native';

import Photo from './photo';

import GridView from 'react-native-grid-view'


var IMAGES_PER_ROW = 3;


class photos extends Component {

	constructor(props) {
    super(props);

    var album_id  = this.props.album.id;
    this.props.fetchPhotos(album_id);
  }

  renderItem(photo) {
    return <Photo photo={photo} key={photo.id} />
  }

  render () {
    return (
      <View style={{flex:1, top: 60}}>
        <GridView
        items={this.props.photos}
        itemsPerRow={IMAGES_PER_ROW}
        renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default photos;