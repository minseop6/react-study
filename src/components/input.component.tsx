import React from 'react';
import CSS from 'csstype';

export const Input: React.FC = () => {
  const inputStyle: CSS.Properties = {
    margin: '20px 0 0 0',
    width: '400px',
    height: '30px',
  };

  return (
    <div className="Input">
      <input type="text" style={inputStyle} />
    </div>
  );
};
