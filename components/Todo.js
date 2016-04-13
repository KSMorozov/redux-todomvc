import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import TextInput from './TextInput';

const Todo = ({ text, completed, editing, id, onDeleteTodo, onToggleTodo }) =>
  <li className={`todo ${completed && 'completed'} ${editing && 'editing'}`}>
    <div className="view" onClick={onToggleTodo && onToggleTodo.bind(this, id)}>
      <input type="checkbox" defaultChecked={completed} className="toggle" />
      <label htmlFor="todo">
        {`${text} `}
      </label>
      <button
        className="destroy"
        onClick={onDeleteTodo && onDeleteTodo.bind(undefined, id)}
      />
    </div>
    <TextInput />
  </li>;

Todo.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default pure(Todo);
