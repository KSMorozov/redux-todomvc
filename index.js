/* eslint no-use-before-define: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';
import App from './components/App';
require('./node_modules/todomvc-app-css/index.css');

let todos = List.of(
  Map({ id: 1, text: 'React', status: 'active', editing: false }),
  Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
  Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
);

const filter = 'all';

const handleToggleTodo = (id) => {
  todos = todos.update(
    todos.findIndex((t) => t.get('id') === id),
    (t) => t.set('status', (t.get('status') === 'active' ? 'completed' : 'active'))
  );
  render();
};

const handleDeleteTodo = (id) => {
  todos = todos.filter((t) => t.get('id') !== id);
  render();
};

const render = () => {
  ReactDOM.render(
    <App
      todos={todos}
      filter={filter}
      handleDeleteTodo={handleDeleteTodo}
      handleToggleTodo={handleToggleTodo}
    />,
    document.getElementById('root')
  );
};

render();
