import React, { useState } from 'react';

export const Navigation: React.FC<{ subjectList: string[] }> = ({ subjectList }) => {
  const [selectedSubject, setSelectedSubject] = useState('HTML');

  const constructNavigationList = (list: string[]) => {
    const subjectList = list;

    return subjectList.map((item) => {
      return (
        <li key={item}>
          <button type="button" onClick={() => setSelectedSubject(item)}>
            {item}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="Navigation">
      {selectedSubject}
      <ul>{constructNavigationList(subjectList)}</ul>
    </div>
  );
};
