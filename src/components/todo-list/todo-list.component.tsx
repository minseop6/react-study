import React from 'react';

import { Input } from '../input/input.component';
import { List } from '../list/list.component';

export const TodoList: React.FC = () => {
  return (
    <div className="todoList">
      <Input />
      <List />
    </div>
  );
};
