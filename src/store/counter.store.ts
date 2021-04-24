import { createStore } from 'redux';
import { createAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

export const reducer = (state = initialState, action): ICounterState => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('counter store: ', store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
