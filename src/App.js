import { React, Component } from 'react';
import Subject from './components/subject.component';
import Navigation from './components/navigation.component';
import Article from './components/article.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Subject />
        <Navigation />
        <Article />
      </div>
    );
  }
}

export default App;
