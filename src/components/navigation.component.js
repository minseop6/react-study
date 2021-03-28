import { React, Component } from 'react';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      subject: 'HTML',
    };
  }

  chagneSubject(subject) {
    this.setState({
      subject,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  preventAnchorFunction(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    const { subject } = this.state;
    return (
      <div className="Navigation">
        {subject}
        <a href="test" onClick={this.preventAnchorFunction}>
          TEST
        </a>
        <ul>
          <li>
            <button type="button" onClick={() => this.chagneSubject('HTML')}>
              HTML
            </button>
          </li>
          <li>
            <button type="button" onClick={() => this.chagneSubject('CSS')}>
              CSS
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => this.chagneSubject('Javascript')}
            >
              Javascript
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
