/* eslint no-use-before-define: 0 */
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/todos';
import App from './containers/App';
require('./node_modules/todomvc-app-css/index.css');

const createStoreDevTools = compose(
  window.devToolsExtension
  ? window.devToolsExtension()
  : (f) => f
)(createStore);

const store = createStoreDevTools(reducer);

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
