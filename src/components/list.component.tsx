import React from 'react';
import CSS from 'csstype';
import Icon from '@material-ui/core/Icon';
import { Close, CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';

export const List: React.FC = () => {
  const listStyle: CSS.Properties = {
    padding: '30px 0 0 0',
    margin: '0 auto',
    width: '400px',
  };

  const itemStyle: CSS.Properties = {
    margin: '5px 0 0 0',
    padding: '10px 0',
    border: '1px solid black',
  };

  const rawData = localStorage.getItem('todoList');
  const todoList: string[] = rawData ? JSON.parse(rawData) : [];
  const items = todoList.map((item) => (
    <div key={item} style={itemStyle}>
      <button type="button">
        <Icon className="fa fa-plus-circle" />
        {/* <CheckBox /> */}
      </button>
      <CheckBoxOutlineBlank />
      <span>{item}</span>
      <Close />
    </div>
  ));

  return (
    <div className="List" style={listStyle}>
      {items}
    </div>
  );
};
