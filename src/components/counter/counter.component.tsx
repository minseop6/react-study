import React, { useEffect } from 'react';

interface ICounterProps {
  count: number;
  onIncrease: any;
  onDeacrease: any;
}

export const Counter: React.FC<ICounterProps> = ({ count, onIncrease, onDeacrease }) => {
  useEffect(() => {
    console.log('rerendering', count);

    return () => {
      console.log('cleanup');
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
