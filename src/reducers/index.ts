// Redux module -> Ducks 패턴 적용 (https://github.com/erikras/ducks-modular-redux)

import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

const rootReducer = combineReducers({
  todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
