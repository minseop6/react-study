import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div className="Subject">
        <h1>{title}</h1>
      </div>
    );
  }
}

Subject.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subject;
