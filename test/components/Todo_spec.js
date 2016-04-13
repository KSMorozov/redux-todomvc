import React from 'react';
import { List, Map } from 'immutable';
import { expect } from 'chai';
import Todo from '../../components/Todo.js';
import {
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
  Simulate,
} from 'react-addons-test-utils';

describe('Todo', () => {
  // Test Todo item render
  it('renders an item', () => {
    const todo = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<Todo text={'React'} />),
      'li'
    );

    expect(todo.length).to.equal(1);
    expect(todo[0].textContent).to.contain('React');
  });

  // Test striking text style
  it('strikes through the item if it is completed', () => {
    const todo = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<Todo text={'React'} completed />),
      'li'
    );

    expect(todo[0].classList.contains('completed')).to.equal(true);
  });

  // Test editing input style
  it('should look different when editing', () => {
    const todo = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<Todo text={'React'} editing />),
      'li'
    );

    expect(todo[0].classList.contains('editing')).to.equal(true);
  });

  // Test Text checkbox style
  it('should be checked if the item is completed', () => {
    const input = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(
        <Todo text="React" completed />,
        <Todo text="Redux" />,
      ),
      'input'
    );

    expect(input[0].checked).to.equal(true);
    expect(input[1].checked).to.equal(false);
  });

  // Test Click on delete button
  it('should invoke callback when the deleted button is clicked', () => {
    let todos = List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
    );

    const handleDeleteTodo = (id) => {
      todos = todos.filter((t) => t.get('id') !== id);
    };

    const buttons = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<Todo text="React" id={1} onDeleteTodo={handleDeleteTodo} />),
      'button'
    );
    Simulate.click(buttons[0]);

    expect(todos.count()).to.equal(2);
    expect(todos.get(0))
      .to.equal(Map({ id: 2, text: 'Redux', status: 'active', editing: false }));
    expect(todos.get(1))
      .to.equal(Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }));
  });

  it('should invoke callback when the checkbox is clicked', () => {
    let todos = List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
    );

    const handleToggleTodo = (id) => {
      todos = todos.update(
        todos.findIndex((t) => t.get('id') === id),
        (t) => t.set('status', (t.get('status') === 'active' ? 'completed' : 'active'))
      );
    };

    const checkboxes = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<Todo text="React" id={1} onToggleTodo={handleToggleTodo} />),
      'input'
    );
    Simulate.click(checkboxes[0]);

    expect(todos.count()).to.equal(3);
    expect(todos.get(0))
      .to.equal(Map({ id: 1, text: 'React', status: 'completed', editing: false }));
    expect(todos.get(1))
      .to.equal(Map({ id: 2, text: 'Redux', status: 'active', editing: false }));
    expect(todos.get(2))
      .to.equal(Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }));
  });
});
