import React, { PropTypes } from 'react';
import TodoList from './TodoList';

const App = ({ todos, filter }) =>
  <section className="todoapp">
    <section className="main">
      <TodoList todos={todos || []} filter={filter} />
    </section>
  </section>;

App.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;
