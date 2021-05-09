import React, { useState } from 'react';
import CSS from 'csstype';

export const Input: React.FC = () => {
  const [text, setText] = useState('');

  const inputStyle: CSS.Properties = {
    margin: '20px 0 0 0',
    width: '400px',
    height: '30px',
  };

  const textChanged = (value: string) => {
    setText(value);
  };

  const saveTodoItem = (keyCode: number) => {
    if (keyCode === 13) {
      const storedList = localStorage.getItem('todoList');
      const todoList: string[] = storedList ? JSON.parse(storedList) : [];
      todoList.push(text);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      setText('');
    }
  };

  return (
    <div className="Input">
      <input
        type="text"
        style={inputStyle}
        value={text}
        onKeyDown={(e) => saveTodoItem(e.keyCode)}
        onChange={(e) => textChanged(e.target.value)}
      />
    </div>
  );
};
