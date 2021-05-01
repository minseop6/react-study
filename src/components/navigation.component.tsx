import React, { useState, useEffect } from 'react';

export const Navigation = ({ subjectList }) => {
  const [selectedSubject, setSelectedSubject] = useState('HTML');
  useEffect(() => {
    console.log(selectedSubject);

    return () => {
      console.log('unmount');
    };
  });

  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   console.log(toggle);
  // });

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
      <button type="button" onClick={() => setToggle(!toggle)}>
        {toggle.toString()}
      </button>
    </div>
  );
};
