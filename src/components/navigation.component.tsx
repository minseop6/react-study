import React, { useState, useEffect } from 'react';

export const Navigation = ({ subjectList }) => {
  const [selectedSubject, setSelectedSubject] = useState('HTML');
  useEffect(() => {
    console.log(selectedSubject);
  });

  const chagneSubject = (selectedSubject: string) => {
    setSelectedSubject(selectedSubject);
  };

  const constructNavigationList = (list: string[]) => {
    const subjectList = list;

    return subjectList.map((item) => {
      return (
        <li key={item}>
          <button type="button" onClick={() => chagneSubject(item)}>
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
