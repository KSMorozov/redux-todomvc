import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import Todo from './Todo';

const TodoList = ({ todos, filter }) => {
  const filteredTodos = todos.filter((t) => filter === 'all' || t.get('status') === filter);
  return (
    <ul className="todo-list">
      {
        filteredTodos.map((todo) =>
          <Todo
            text={todo.get('text')}
            key={todo.get('text')}
          />
        )
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
};

export default pure(TodoList);
