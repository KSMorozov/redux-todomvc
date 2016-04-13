/* eslint no-use-before-define: 0 */
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { List, Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import App from './containers/App';
require('./node_modules/todomvc-app-css/index.css');

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      { id: 1, text: 'React', status: 'active', editing: false },
      { id: 2, text: 'Redux', status: 'active', editing: false },
      { id: 3, text: 'Immutable', status: 'active', editing: false },
    ],
    filter: 'all',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
