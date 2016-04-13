import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import Todo from './Todo';

const TodoList = ({ todos, filter, handleDeleteTodo, handleToggleTodo }) => {
  const filteredTodos = todos.filter((t) => filter === 'all' || t.get('status') === filter);
  return (
    <ul className="todo-list">
      {
        filteredTodos.map((todo) =>
          <Todo
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            completed={todo.get('status') === 'completed' || false}
            editing={todo.get('editing')}
            text={todo.get('text')}
            key={todo.get('text')}
            id={todo.get('id')}
          />
        )
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};

export default pure(TodoList);
