import { createAction } from 'redux-actions';
import { ITodo } from '../components/todo-list/todo-list.interface';

const ADD = 'todo/ADD';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';

export const addItem = createAction(ADD);
export const updateItem = createAction(UPDATE);
export const deleteItem = createAction(DELETE);

type TodoActionType = {
  type: 'todo/ADD' | 'todo/UPDATE' | 'todo/DELETE';
  payload: ITodo;
};

interface ITodoState {
  todoList: ITodo[];
}

const storedList = localStorage.getItem('todoList');
const initialState: ITodoState = {
  todoList: storedList ? JSON.parse(storedList) : [],
};

export const todoReducer = (state = initialState, action: TodoActionType): ITodoState => {
  let index = 0;
  if (!action.payload) {
    return state;
  }
  switch (action.type) {
    case ADD:
      state.todoList.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      return state;
    case UPDATE:
      index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      index && state.todoList.splice(index, 1, action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      return state;
    case DELETE:
      index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      index && state.todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      return state;
    default:
      return state;
  }
};
