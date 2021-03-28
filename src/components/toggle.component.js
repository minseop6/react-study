import { React, Component } from 'react';
// import PropTypes from 'prop-types';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.changeToggleStatus = this.changeToggleStatus.bind(this); // or use arraow function to button onclick method
  }

  changeToggleStatus() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <div className="Toggle">
        <button type="button" onClick={this.changeToggleStatus}>
          {isToggleOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default Toggle;
