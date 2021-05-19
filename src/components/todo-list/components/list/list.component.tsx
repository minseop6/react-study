import React from 'react';
import './list.component.scss';
import Icon from '@material-ui/core/Icon';
import { ITodo } from '../../todo-list.interface';

interface IListProps {
  list: ITodo[];
}

export const List: React.FC<IListProps> = (props: IListProps) => {
  const { list } = props;
  const items = list.map((item) => (
    <div key={item.id} className={`item ${item.checked && 'complete'}`}>
      <input type="checkbox" className="checkbox" />
      <span>{item.text}</span>
      <Icon className="close">close</Icon>
    </div>
  ));

  return <div className="list">{items}</div>;
};
