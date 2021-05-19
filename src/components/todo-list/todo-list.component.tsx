import React from 'react';
import { useSelector } from 'react-redux';

import { Input } from '../input/input.component';
import { List } from '../list/list.component';
import { RootState } from '../../reducers';

export const TodoList: React.FC = () => {
  const { todoList } = useSelector((state: RootState) => ({
    todoList: state.todoReducer.todoList,
  }));
  return (
    <div className="todoList">
      <Input />
      <List list={todoList} />
    </div>
  );
};
