import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) =>
  <ul className="todo-list">
    {
      todos.map((todo) =>
        <Todo
          editing={todo.get('editing')}
          status={todo.get('status')}
          text={todo.get('text')}
          id={todo.get('id')}
          key={todo.get('text')}
        />
      )
    }
  </ul>;

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoList;
