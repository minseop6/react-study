import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../../reducers';
import { CounterContainer } from './counter.container';
import { increase, decrease } from './state/counter.reducer';

let container: Element | null = null;
const store = createStore(rootReducer, composeWithDevTools());

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && unmountComponentAtNode(container);
  container && container.remove();
  container = null;
});

describe('counter', () => {
  describe('render', () => {
    it('renders count component', () => {
      act(() => {
        render(
          <Provider store={store}>
            <CounterContainer />
          </Provider>,
          container,
        );
      });
      container && expect(container.querySelector('span')?.textContent).toBe('0');
    });
  });

  describe('action', () => {
    it('should create action', () => {
      const expectedActions = [{ type: 'counter/INCREASE' }, { type: 'counter/DECREASE' }];
      const actions = [increase(), decrease()];

      expect(actions).toEqual(expectedActions);
    });
  });
});
