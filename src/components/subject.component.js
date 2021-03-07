import { React, Component } from 'react';

class Subject extends Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="Subject">
        <h1>{`React ${this.state.count}`}</h1>
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }
}

export default Subject;
