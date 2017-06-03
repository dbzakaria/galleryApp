import React, { Component } from 'react';

import { Text, View , Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

class details extends Component {

  render () {
    var details = this.props.photo.title;
  	var image = this.props.photo.url;

  	return (
      <Container style={{top:70, padding: 20}}>
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
              <Image source={{ uri: image }} style={{width: 350, height: 400}} resizeMode='cover' />
            </CardItem>
           </Card>
        </Content>
      </Container>
  	);
  }
}

export default details;