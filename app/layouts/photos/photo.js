import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

class Photo extends Component {

	handlePress = () => {
    	Alert.alert(this.props.photo.id.toString());
    	// make call to fetch photos given album id
    	//console.log(this.props.photo.album)
    	// go to photos page
    	//Actions.photos({album: this.props.album})
  	}

  	render () {
  		var photo = this.props.photo;
      console.log(photo.title);
  		return (
  			<View>
          <TouchableOpacity onPress={this.handlePress} >
            <Text>
              {photo.title}
            </Text>
          </TouchableOpacity>
        </View>
  		);
   // }
      //else {
      //return (
       // null
    //  );
   // }
  }
}

export default Photo;