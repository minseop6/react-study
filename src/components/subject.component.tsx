import React from 'react';

interface ISubjectProps {
  title: string;
}

export const Subject: React.FC<ISubjectProps> = (props) => {
  const { title } = props;

  return (
    <div className="Subject">
      <h1>{title}</h1>
    </div>
  );
};
