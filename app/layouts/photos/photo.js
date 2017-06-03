import React, { Component } from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';


class Photo extends Component {

	handlePress = () => {
    Actions.details({photo: this.props.photo})
  }

	render () {
    var photo = this.props.photo;

		return (
			<View style={{flex: 1,  flexDirection: 'row' }} >
        <TouchableOpacity onPress={this.handlePress} >
          <Image source={{ uri: photo.thumbnailUrl }} style={{width: 130, height: 130 }} />
        </TouchableOpacity>
      </View>
	   );
  }
}



export default Photo;