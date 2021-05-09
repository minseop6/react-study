import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './counter.component';
import { RootState } from '../../reducers';
import { increase, decrease } from './state/counter.reducer';

export const CounterContainer = (): JSX.Element => {
  const { count } = useSelector((state: RootState) => ({
    count: state.counterReducer.count,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return <Counter count={count} onIncrease={onIncrease} onDeacrease={onDecrease} />;
};
