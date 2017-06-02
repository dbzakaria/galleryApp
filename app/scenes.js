import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import albums from './layouts/albums';
import photos from './layouts/photos';


export default scenes = Actions.create(
  <Scene key="root">
    <Scene key="albums" title={'Albums'} component={albums} hideNavBar={false} initial={true} />
    <Scene key="photos" title={'photos'} component={photos} hideNavBar={false} />
  </Scene>
);
