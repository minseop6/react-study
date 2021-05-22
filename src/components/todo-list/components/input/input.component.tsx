import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './input.component.scss';
import { addItem } from '@/reducers/todo.reducer';
import { ITodo } from '../../todo-list.interface';

interface IListProps {
  list: ITodo[];
}

export const Input: React.FC<IListProps> = (props: IListProps) => {
  const { list } = props;
  const [text, setText] = useState('');

  const textChanged = (value: string) => {
    setText(value);
  };

  const dispatch = useDispatch();
  const addTodo = (item: ITodo) => dispatch(addItem(item));

  const saveTodoItem = (keyCode: number) => {
    if (keyCode === 13) {
      addTodo({
        id: list.length + 1,
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
