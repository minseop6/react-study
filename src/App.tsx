import React from 'react';
import CSS from 'csstype';

import { Clock } from './components/clock.component';
import { Input } from './components/input/input.component';
import { List } from './components/list/list.component';

export const App: React.FC = (): JSX.Element => {
  const globalStyle: CSS.Properties = {
    textAlign: 'center',
  };

  return (
    <div className="App" style={globalStyle}>
      <Clock />
      <Input />
      <List />
    </div>
  );
};
