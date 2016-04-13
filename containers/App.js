/* eslint react/prefer-stateless-function:0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    const { todos, filter, handleDeleteTodo, handleToggleTodo } = this.props;
    return (
      <section className="todoapp">
        <section className="main">
          <TodoList
            todos={todos || []}
            filter={filter}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </section>
      </section>
    );
  }
}

App.propTypes = {
  todos: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter'),
  };
}

export default connect(mapStateToProps)(App);
