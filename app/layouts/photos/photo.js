import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

class Photo extends Component {

	handlePress = () => {
    	Actions.details({photo: this.props.photo})
  	}

  	render () {
      console.log("Photo.render");
  		var photo = this.props.photo;
      console.log(photo.thumbnailUrl);
  		return (
  			<View>
          <TouchableOpacity onPress={this.handlePress} >
            <Image source={{ uri: photo.thumbnailUrl }} style={{width: 50, height: 50}} />
            <Text>{photo.title}</Text>
          </TouchableOpacity>
        </View>
  	);
  }
}

export default Photo;