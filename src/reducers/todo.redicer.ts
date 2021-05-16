import { createAction } from 'redux-actions';
import { ITodo } from '../components/input/input.component';

const ADD = 'todo/ADD';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';

export const addItem = createAction(ADD);
export const updateItem = createAction(UPDATE);
export const deleteItem = createAction(DELETE);

type ActionType = {
  type: 'todo/ADD' | 'todo/UPDATE' | 'todo/DELETE';
};

interface ITodoState {
  todoList: ITodo[];
}

const state: ITodoState = {
  todoList: [],
};

export const todoReducer = (item: ITodo, action: ActionType): ITodo[] => {
  let index = 0;
  switch (action.type) {
    case ADD:
      state.todoList.push(item);
      return state.todoList;
    case UPDATE:
      index = state.todoList.findIndex((todo) => todo.id === item.id);
      index && state.todoList.splice(index, 1, item);
      return state.todoList;
    case DELETE:
      index = state.todoList.findIndex((todo) => todo.id === item.id);
      index && state.todoList.splice(index, 1);
      return state.todoList;
    default:
      return state.todoList;
  }
};
