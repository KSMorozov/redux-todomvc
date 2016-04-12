import React, { PropTypes } from 'react';

const Todo = ({ editing, status, text, id }) =>
  <li className="active">
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label htmlFor="todo">
        {`${text} `}
        {`${status} `}
        {`${editing} `}
        {`${id}`}
      </label>
      <button style={{ marginLeft: '10px' }} className="destroy"></button>
    </div>
  </li>;

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
};

export default Todo;
