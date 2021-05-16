import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './input.component.scss';
import { RootState } from '../../reducers';
import { addItem } from '../../reducers/todo.reducer';

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

  const { todoList } = useSelector((state: RootState) => ({
    todoList: state.todoReducer.todoList,
  }));

  const dispatch = useDispatch();
  const addTodo = (item: ITodo) => dispatch(addItem(item));

  const saveTodoItem = (keyCode: number) => {
    if (keyCode === 13) {
      addTodo({
        id: todoList.length + 1,
        checked: false,
        text,
      });
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
