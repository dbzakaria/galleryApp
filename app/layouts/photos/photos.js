import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert , Image, StyleSheet} from 'react-native';

import Photo from './photo';

import GridView from 'react-native-grid-view'



var IMAGES_PER_ROW = 3;


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

  renderItem(photo) {
   
    return <Photo photo={photo} key={photo.id} />
  }

  componentWillMount() {
    //this.props.fetchPhotos(album_id);
    //console.log(album_id);
    //var album_id  = this.props.album.id;
    //console.log(album_id);
    console.log("Photos.componentWillMount");
  }
  
   

  render () {
    //console.log("Photos.render");
    //var album_id  = this.props.album.id;
    //console.log(album_id);
    
      /*const photosTitles = this.props.photos.map((photo, index ) => (
        <Photo photo={photo} key={photo.id} photos={this.props.photos} />
      ));*/

      return (
        <View style={{flex:1, top: 60}}>
        <GridView
        items={this.props.photos}
        itemsPerRow={IMAGES_PER_ROW}
        renderItem={this.renderItem}
        //style={styles.listView}
      />
      </View>
         /*<View style={{flex:1 , flexDirection: 'row', top: 70, padding: 10}}>
           <ScrollView>
            {photosTitles}
           </ScrollView>
        </View>*/
        );
  }
}

var styles = StyleSheet.create({
  listView: {
    left: 10
    //paddingTop: 20,
    //backgroundColor: 'red',
  },
});

export default photos;