import React from 'react';
import { Subject } from './components/subject.component';
import Navigation from './components/navigation.component';
import Article from './components/article.component';
import Header from './components/header.component';
import { Counter } from './components/counter.component';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Subject title="WEB" />
      <Navigation subjectList={['HTML', 'CSS', 'Javascript']} />
      <Article title="HTML" contents="HTML is HyperText Markup Language." />
      <Counter />
    </div>
  );
};
