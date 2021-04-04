import { React, Component } from 'react';
import Subject from './components/subject.component';
import Navigation from './components/navigation.component';
import Article from './components/article.component';
import Header from './components/header.component';
// import Toggle from './components/toggle.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Subject title="WEB" />
        <Navigation subjectList={['HTML', 'CSS', 'Javascript']} />
        <Article title="HTML" contents="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
