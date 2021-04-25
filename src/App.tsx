import React from 'react';
import { Subject } from './components/subject.component';
import Navigation from './components/navigation.component';
import Article from './components/article.component';
import Header from './components/header.component';
import CounterContainer from './components/counter/counter.container';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Subject title="WEB" />
      <Navigation subjectList={['HTML', 'CSS', 'Javascript']} />
      <Article title="HTML" contents="HTML is HyperText Markup Language." />
      <CounterContainer />
    </div>
  );
};
