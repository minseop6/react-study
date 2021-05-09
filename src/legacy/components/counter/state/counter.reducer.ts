import { createAction } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

type ActionType = {
  type: 'counter/INCREASE' | 'counter/DECREASE';
};
interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

export const counterReducer = (state = initialState, action?: ActionType): ICounterState => {
  if (!action) return state;

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
