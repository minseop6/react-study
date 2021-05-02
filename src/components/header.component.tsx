import React, { useState } from 'react';

export const Header = (): JSX.Element => {
  const [loginStatus, setLoginStatus] = useState(false);

  const userGreeting = () => {
    return (
      <div className="Header">
        <h1>{loginStatus ? 'Welcome back!' : 'Please sign up!'}</h1>
        {loginButton(loginStatus)}
      </div>
    );
  };

  const loginButton = (loginStatus: boolean) => {
    return (
      <button type="button" onClick={changeToggleStatus}>
        {loginStatus ? 'Logout' : 'Login'}
      </button>
    );
  };

  const changeToggleStatus = () => {
    setLoginStatus(!loginStatus);
  };

  return userGreeting();
};
