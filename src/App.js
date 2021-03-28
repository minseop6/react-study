import { React, Component } from 'react';
import Subject from './components/subject.component';
import Navigation from './components/navigation.component';
import Article from './components/article.component';
import Toggle from './components/toggle.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Subject title="WEB" />
        <Navigation />
        <Article title="HTML" contents="HTML is HyperText Markup Language." />
        <Toggle />
      </div>
    );
  }
}

export default App;
