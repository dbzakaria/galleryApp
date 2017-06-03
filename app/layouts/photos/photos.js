import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert , Image} from 'react-native';

import Photo from './photo';

class photos extends Component {

	constructor(props) {
    super(props);

    console.log("Photos.constructor");
    var album_id  = this.props.album.id;
   // var photo_album_id  = this.props.photo.id;
    //console.log(album_id,"..........");
   // this.props.
    this.props.fetchPhotos(album_id);
  }

  componentWillMount() {
    //this.props.fetchPhotos(album_id);
    //console.log(album_id);
    //var album_id  = this.props.album.id;
    //console.log(album_id);
    console.log("Photos.componentWillMount");
  }
  
   

  render () {
    console.log("Photos.render");
    //var album_id  = this.props.album.id;
    //console.log(album_id);
    
      const photosTitles = this.props.photos.map((photo, index ) => (
        <Photo photo={photo} key={photo.id} />
      ));

      return (
         <View style={{flex:1 , flexDirection: 'column', top: 70, padding: 10}}>
           <ScrollView>
            {photosTitles}
           </ScrollView>
        </View>
        );
  }
}

export default photos