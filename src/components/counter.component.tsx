import * as React from 'react';

export const Counter = ({ count, onIncrease, onDeacrease }) => {
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
