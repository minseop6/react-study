import { React, Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './clock.component';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { title } = this.props;
    const { date } = this.state;
    return (
      <div className="Subject">
        <Clock date={date} />
        <h1>{title}</h1>
      </div>
    );
  }
}

Subject.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subject;
