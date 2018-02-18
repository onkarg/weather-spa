import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import ReduxPromise from 'redux-promise';

const finalCreateStore = compose(applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

export const store = finalCreateStore(reducer);

