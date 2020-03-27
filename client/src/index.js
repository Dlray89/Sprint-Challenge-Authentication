import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { jokesReducer } from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(jokesReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter></Provider>,
  document.getElementById('root')
);


