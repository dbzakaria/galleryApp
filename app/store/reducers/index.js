import { combineReducers } from 'redux';
// ... other reducers
import albums from './albums'
import photos from './photos'

export default combineReducers({
  // ... other reducers
  albums,
  photos,
});
