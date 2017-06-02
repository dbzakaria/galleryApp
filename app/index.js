/*import React, { Component } from 'react';

import { Platform, View, AsyncStorage, Text } from 'react-native';

import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';


const RouterWithRedux = connect()(Router);
*/
import React, { Component } from 'react';

import { Router } from 'react-native-router-flux';

import { connect, Provider } from 'react-redux';

import store from 'react-native-simple-store';

import scenes from './scenes';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import initStore from './store';

const RouterWithRedux = connect()(Router);

const store_redux = initStore();

export default class App extends Component {

  
  render() {
    //this.store_redux = initStore();
    //this.store_redux = initStore({})
   /* if( this.store_redux === undefined ) {
      store.get('reduxState').then((data) => {
        this.store_redux = initStore(data);
        this.forceUpdate();
        return(<View></View>);
      });
      return(<View></View>);
    } else {
      console.log("testing.....");*/
      return (
        <View style={{ flex: 1 }}>
          <Provider store={store_redux}>
             <RouterWithRedux scenes={scenes}>
             </RouterWithRedux>
          </Provider>
        </View>
        );
    }
  }



