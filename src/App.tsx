import React from 'react';
import CSS from 'csstype';
// import { Subject } from './components/subject/subject.component';
// import { Navigation } from './components/navigation.component';
// import Article from './components/article.component';
// import { Header } from './components/header.component';
// import { CounterContainer } from './components/counter/counter.container';
// import './App.css';

// export const App: React.FC = (): JSX.Element => {
//   return (
//     <div className="App">
//       <Header />
//       <Subject title="WEB" />
//       <Navigation subjectList={['HTML', 'CSS', 'Javascript']} />
//       <Article title="HTML" contents="HTML is HyperText Markup Language." />
//       <CounterContainer />
//     </div>
//   );
// };

import { Clock } from './components/clock.component';
import { Input } from './components/input.component';

export const App: React.FC = (): JSX.Element => {
  const globalStyle: CSS.Properties = {
    textAlign: 'center',
  };

  return (
    <div className="App" style={globalStyle}>
      <Clock />
      <Input />
    </div>
  );
};
