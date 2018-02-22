import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import createAppStore from './store'
import { fetchLocation } from "./actions";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = createAppStore()

store.dispatch(fetchLocation());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
