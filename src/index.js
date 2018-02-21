import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from "react-redux";
import configureStore from "./store";
import { fetchLocation } from './actions';

const store = configureStore();

store.dispatch(fetchLocation());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
