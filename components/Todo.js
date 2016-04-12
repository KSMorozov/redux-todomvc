import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import TextInput from './TextInput';

const Todo = ({ text, completed, editing }) =>
  <li className={`todo ${completed && 'completed'} ${editing && 'editing'}`}>
    <div className="view">
      <input type="checkbox" defaultChecked={completed} className="toggle" />
      <label htmlFor="todo">
        {`${text} `}
      </label>
      <button className="destroy"></button>
    </div>
    <TextInput />
  </li>;

Todo.propTypes = {
  // id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  // editing: PropTypes.bool.isRequired,
};

export default pure(Todo);
