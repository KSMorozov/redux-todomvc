import React, { PropTypes } from 'react';
import TodoList from './TodoList';

const App = ({ todos, filter, handleDeleteTodo, handleToggleTodo }) =>
  <section className="todoapp">
    <section className="main">
      <TodoList
        todos={todos || []}
        filter={filter}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </section>
  </section>;

App.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};

export default App;
