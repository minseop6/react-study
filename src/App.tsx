import React from 'react';
import CSS from 'csstype';

import { Clock } from './components/clock.component';
import { TodoList } from './components/todo-list/todo-list.component';

export const App: React.FC = (): JSX.Element => {
  const globalStyle: CSS.Properties = {
    textAlign: 'center',
  };

  return (
    <div className="App" style={globalStyle}>
      <Clock />
      <TodoList />
    </div>
  );
};
