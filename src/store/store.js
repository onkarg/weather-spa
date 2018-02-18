import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

export const store = finalCreateStore(reducer);

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}