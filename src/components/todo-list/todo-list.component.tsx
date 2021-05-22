import React from 'react';
import { useSelector } from 'react-redux';

import { Input } from './components/input/input.component';
import { List } from './components/list/list.component';
import { RootState } from '@/reducers';

export const TodoList: React.FC = () => {
  const { todoList } = useSelector((state: RootState) => ({
    todoList: state.todoReducer.todoList,
  }));

  return (
    <div className="todoList">
      <Input list={todoList} />
      <List list={todoList} />
    </div>
  );
};
