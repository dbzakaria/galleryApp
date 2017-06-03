import React, { Component } from 'react';

import { View , ScrollView } from 'react-native';

import Album from './album';

class albums extends Component {

	constructor(props) {
    super(props);
    this.props.fetchAlbums();
  }

  render () {

    if (this.props.albums.length ) {
      const albumsTitles = this.props.albums.map((album, index) => (
        <Album album={album} key={album.id} />
      ));

      return (
        <View style={{flex:1 , flexDirection: 'column', top: 70}}>
          <ScrollView>
            {albumsTitles}
           </ScrollView>
        </View>
      );
    }
    else {
      return (
        <View></View>
      );
    }
  }
}

export default albums