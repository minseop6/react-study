import * as React from 'react';

export const Counter = () => {
  const count = 0;
  return (
    <div className="Counter">
      <button type="button">+</button>
      <span>&nbsp;{count}&nbsp;</span>
      <button type="button">-</button>
    </div>
  );
};
