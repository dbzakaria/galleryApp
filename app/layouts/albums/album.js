import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';

class Album extends Component {

	handlePress = () => {
    	//Alert.alert(this.props.album.id.toString());
    	// make call to fetch photos given album id
    	
    	// go to photos page
    	Actions.photos({album: this.props.album})
  	}

  	render () {
  		var album = this.props.album;
  		//var album_id = this.props.album.id;


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

export default Album;