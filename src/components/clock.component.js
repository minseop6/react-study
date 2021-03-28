import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
    };
  }

  componentDidMount() {
    console.log('component did mount');
    this.timerID = setInterval(() => {
      this.tick();
    });
  }

  componentWillUnmount() {
    console.log('component will unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="Clock">
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

Clock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Clock;
