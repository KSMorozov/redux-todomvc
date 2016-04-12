import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import TextInput from './TextInput';

const Todo = ({ text }) =>
  <li className="todo">
    <div className="view">
      <input type="checkbox" className="toggle" />
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
  // status: PropTypes.string.isRequired,
  // editing: PropTypes.bool.isRequired,
};

export default pure(Todo);
