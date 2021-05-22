import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useDispatch } from 'react-redux';
import { updateItem } from '@/reducers/todo.reducer';
import './list.component.scss';
import { ITodo } from '../../todo-list.interface';

interface IListProps {
  list: ITodo[];
}

export const List: React.FC<IListProps> = (props: IListProps) => {
  const { list } = props;

  const dispatch = useDispatch();
  const updateTodo = (item: ITodo) => dispatch(updateItem(item));

  const updateChecked = (item: ITodo) => {
    updateTodo({
      ...item,
      checked: !item.checked,
    });
  };

  const items = list.map((item) => (
    <div key={item.id} className={`item ${item.checked && 'complete'}`}>
      <input type="checkbox" className="checkbox" defaultChecked={item.checked} onClick={() => updateChecked(item)} />
      <span>{item.text}</span>
      <Icon className="close">close</Icon>
    </div>
  ));

  return <div className="list">{items}</div>;
};
