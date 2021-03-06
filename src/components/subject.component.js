import { React, Component } from 'react';

class Subject extends Component {
  subject = () => {
    let subject = 'Subject';
    let number = 3;
    return subject + number;
  }

  render() {
    this.subject()
    return (
      <div className="Subject">
        <h1>{this.subject()}</h1>
      </div>
    );
  }
}

export default Subject;