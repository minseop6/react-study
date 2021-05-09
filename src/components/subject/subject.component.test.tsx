import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Subject } from './subject.component';

let container: Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && unmountComponentAtNode(container);
  container && container.remove();
  container = null;
});

it('renders subject component', () => {
  act(() => {
    render(<Subject title="test" />, container);
  });
  container && expect(container.textContent).toBe('test');
});
