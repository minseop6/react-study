import React from 'react';
import './list.component.scss';
import Icon from '@material-ui/core/Icon';
import { ITodo } from '../input/input.component';

export const List: React.FC = () => {
  const rawData = localStorage.getItem('todoList');
  const todoList: ITodo[] = rawData ? JSON.parse(rawData) : [];
  const items = todoList.map((item) => (
    <div key={item.id} className="item">
      <input type="checkbox" className="checkbox" />
      <span>{item.text}</span>
      <Icon className="close">close</Icon>
    </div>
  ));

  return <div className="list">{items}</div>;
};
