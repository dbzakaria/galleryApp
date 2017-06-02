import { AsyncStorage } from 'react-native';
import store from 'react-native-simple-store';
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';

import { albumsSagas } from './sagas/albums'
import { photosSagas } from './sagas/photos'

export default initStore = (persistedState) => {

    const rootReducer = (state, action) => {
        return reducers(state, action)
    };

    const sagaMiddleware = createSagaMiddleware();

    const store_redux = createStore(
        rootReducer,
        persistedState ? persistedState : {},
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(albumsSagas)
    sagaMiddleware.run(photosSagas)


    store_redux.subscribe(() =>
        /* Persist the state everytime it is updated */
        store.save('reduxState', store_redux.getState())
    )

    let unsubscribe = store_redux.subscribe(() => {
        //console.log(store_redux.getState());
    })

    return store_redux;
}
