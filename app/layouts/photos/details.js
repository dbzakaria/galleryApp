import React, { Component } from 'react';

import { Text, View , Image , Dimensions} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

class details extends Component {


  render () {
    var details = this.props.photo.title;
  	var image = this.props.photo.url;
    var {height, width} = Dimensions.get('window');
    width = width - 10;

  	return (
      <Container style={{top:70, margin: 5}}>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 20}}> {details} </Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: image }}  style={{width: width , height: width}}/>
            </CardItem>
           </Card>
        </Content>
      </Container>
  	);
  }
}

export default details;