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
      console.log(time);
    }, 1000);
  };

  const colckStyle: CSS.Properties = {
    textAlign: 'center',
  };

  return (
    <div className="Clock" style={colckStyle}>
      <h1>{time}</h1>
    </div>
  );
};
