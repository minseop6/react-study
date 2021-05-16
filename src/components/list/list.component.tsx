import React from 'react';
import './list.component.scss';
import Icon from '@material-ui/core/Icon';

export const List: React.FC = () => {
  const rawData = localStorage.getItem('todoList');
  const todoList: string[] = rawData ? JSON.parse(rawData) : [];
  const items = todoList.map((item) => (
    <div key={item} className="item">
      <input type="checkbox" className="checkbox" />
      <span style={{ fontSize: '16' }}>{item}</span>
      <Icon>close</Icon>
    </div>
  ));

  return <div className="list">{items}</div>;
};
