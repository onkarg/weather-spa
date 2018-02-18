import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(
    reducer
    , composeEnhancers(
        applyMiddleware(
            promiseMiddleware()
        )
    )
);