import React, { Component } from 'react';

import {  Text, View , ScrollView , TouchableOpacity , Alert, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

class details extends Component {

	

  	render () {
  		var details = this.props.photo.title;
  		var image = this.props.photo.url;


  		return (
  			<View>
  				  <Image source={{ uri: image }} style={{width: 100, height: 100}} />
          	<Text style={{ padding: 10 , fontSize: 50 , top: 70}}>
            	{details}
          	</Text>
         
  			</View>
  		);
  	}
	
}

export default details;