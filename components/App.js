import React, { PropTypes } from 'react';
import TodoList from './TodoList';

const App = ({ todos }) =>
  <section className="todoapp">
    <section className="main">
      <TodoList todos={todos} />
    </section>
  </section>;

App.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default App;
