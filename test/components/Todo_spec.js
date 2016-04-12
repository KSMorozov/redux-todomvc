import React from 'react';
import { expect } from 'chai';
import Todo from '../../components/Todo.js';
import {
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
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

  // Text checkbox style
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
});
