import { React, Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.changeToggleStatus = this.changeToggleStatus.bind(this); // or use arraow function to button onclick method
  }

  userGreeting() {
    const { isLogin } = this.state;

    if (isLogin) {
      return (
        <div className="Header">
          <h1>Welcome back!</h1>
          {this.loginButton(isLogin)}
        </div>
      );
    }

    return (
      <div className="Header">
        <h1>Please sign up!</h1>
        {this.loginButton(isLogin)}
      </div>
    );
  }

  loginButton(isLogin) {
    return (
      <button type="button" onClick={this.changeToggleStatus}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    );
  }

  changeToggleStatus() {
    this.setState(state => ({
      isLogin: !state.isLogin,
    }));
  }

  render() {
    return this.userGreeting();
  }
}

export default Header;
