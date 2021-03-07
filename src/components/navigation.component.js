import { React, Component } from 'react';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Navigation">
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">Javascript</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
