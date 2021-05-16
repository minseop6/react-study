import React, { useState } from 'react';
import './input.component.scss';

export interface ITodo {
  id: number;
  checked: boolean;
  text: string;
}

export const Input: React.FC = () => {
  const [text, setText] = useState('');

  const textChanged = (value: string) => {
    setText(value);
  };

  const saveTodoItem = (keyCode: number) => {
    if (keyCode === 13) {
      const storedList = localStorage.getItem('todoList');
      const todoList: ITodo[] = storedList ? JSON.parse(storedList) : [];
      todoList.push({
        id: todoList.length + 1,
        checked: false,
        text,
      });
      localStorage.setItem('todoList', JSON.stringify(todoList));
      setText('');
    }
  };

  return (
    <div className="Input">
      <input
        type="text"
        className="input"
        value={text}
        onKeyDown={(e) => saveTodoItem(e.keyCode)}
        onChange={(e) => textChanged(e.target.value)}
      />
    </div>
  );
};
