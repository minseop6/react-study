// Redux module -> Ducks 패턴 적용 (https://github.com/erikras/ducks-modular-redux)

import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
