import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(DateTime.now().toFormat('tt'));

  useEffect(() => {
    timeInterval();
  }, []);

  const timeInterval = () => {
    setInterval(() => {
      setTime(DateTime.now().toFormat('tt'));
    }, 1000);
  };

  return (
    <div className="Clock">
      <h1>{time}</h1>
    </div>
  );
};
