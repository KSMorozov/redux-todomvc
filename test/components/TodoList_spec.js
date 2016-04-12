import React from 'react';
import { List, Map } from 'immutable';
import { expect } from 'chai';
import TodoList from '../../components/TodoList.js';
import {
  scryRenderedDOMComponentsWithTag,
  renderIntoDocument,
} from 'react-addons-test-utils';

describe('TodoList', () => {
  // Test Active Items Filter.
  it('renders a list with only the active items if the filter is active', () => {
    const todos = List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
    );
    const items = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<TodoList filter={'active'} todos={todos} />),
      'li'
    );

    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('React');
    expect(items[1].textContent).to.contain('Redux');
  });

  // Test Completed Items Filter
  it('renders a list with only the completed items if the filter is completed', () => {
    const todos = List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
    );
    const items = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<TodoList filter={'completed'} todos={todos} />),
      'li'
    );

    expect(items.length).to.equal(1);
    expect(items[0].textContent).to.contain('Immutable');
  });

  // Test All Items Filter
  it('renders a list with all the items if the filter is all', () => {
    const todos = List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
    );
    const items = scryRenderedDOMComponentsWithTag(
      renderIntoDocument(<TodoList filter={'all'} todos={todos} />),
      'li'
    );

    expect(items.length).to.equal(3);
    expect(items[0].textContent).to.contain('React');
    expect(items[1].textContent).to.contain('Redux');
    expect(items[2].textContent).to.contain('Immutable');
  });
});
