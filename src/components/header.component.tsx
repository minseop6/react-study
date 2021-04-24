import * as React from 'react';

interface IHeaderProps {
  header?: boolean;
}
interface IHeaderState {
  isLogin: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.changeToggleStatus = this.changeToggleStatus.bind(this); // or use arraow function to button onclick method
  }

  private userGreeting() {
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

  private loginButton(isLogin: boolean) {
    return (
      <button type="button" onClick={this.changeToggleStatus}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    );
  }

  private changeToggleStatus() {
    this.setState((state) => ({
      isLogin: !state.isLogin,
    }));
  }

  render() {
    return this.userGreeting();
  }
}

export default Header;
