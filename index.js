import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';
import App from './components/App';
require('./node_modules/todomvc-app-css/index.css');

const todos = List.of(
  Map({ id: 1, text: 'React', status: 'active', editing: false }),
  Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
  Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
);

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));
