import React, { useEffect } from 'react';

export const Counter = ({ count, onIncrease, onDeacrease }) => {
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
    };
  });

  return (
    <div className="Counter">
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <span>&nbsp;{count}&nbsp;</span>
      <button type="button" onClick={onDeacrease}>
        -
      </button>
    </div>
  );
};
