import React from 'react';
import CSS from 'csstype';

export const List: React.FC = () => {
  const listStyle: CSS.Properties = {
    padding: '30px 0 0 0',
    margin: '0 auto',
    width: '400px',
  };

  const rawData = localStorage.getItem('todoList');
  const todoList: string[] = rawData ? JSON.parse(rawData) : [];
  const items = todoList.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="List" style={listStyle}>
      <ul>{items}</ul>
    </div>
  );
};
