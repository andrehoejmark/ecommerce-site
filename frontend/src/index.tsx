import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as $ from 'jquery';
import Popper from 'popper.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
