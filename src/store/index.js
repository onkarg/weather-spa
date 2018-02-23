import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = composeEnhancers(applyMiddleware(thunkMiddleware))(
  createStore
);

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createAppStore = () => {
  let store = configureStore(persistedReducer);
  let persistor = persistStore(store);

  return { persistor, store };
};

export default createAppStore;
