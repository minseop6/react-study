// Redux module -> Ducks 패턴 적용 (https://github.com/erikras/ducks-modular-redux)

import { combineReducers } from 'redux';
import { counterReducer } from '../components/counter/state/counter.reducer';

const rootReducer = combineReducers({
  counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
