import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubject: 'HTML',
    };
  }

  chagneSubject(selectedSubject) {
    this.setState({
      selectedSubject,
    });
  }

  constructNavigationList() {
    const { subjectList } = this.props;

    return subjectList.map(item => {
      return (
        <li key={item}>
          <button type="button" onClick={() => this.chagneSubject(item)}>
            {item}
          </button>
        </li>
      );
    });
  }

  render() {
    const { selectedSubject } = this.state;
    return (
      <div className="Navigation">
        {selectedSubject}
        <ul>{this.constructNavigationList()}</ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  subjectList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
