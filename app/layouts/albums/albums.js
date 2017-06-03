import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';

import Album from './album';

class albums extends Component {

	constructor(props) {
    super(props);

    console.log("albums_constructor");
    this.props.fetchAlbums();

  }
  

  render () {

    console.log("albums.render");
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