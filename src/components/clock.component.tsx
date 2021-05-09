import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import CSS from 'csstype';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(DateTime.now().toFormat('tt'));

  useEffect(() => {
    timeInterval();
  }, []);

  const timeInterval = () => {
    console.log('timeInterval');
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
