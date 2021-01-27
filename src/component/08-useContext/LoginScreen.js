import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const Login = () => {
    setUser({
      uid: 123456,
      name: 'Deymer',
      email: 'deymerh@hotmail.com'
    })
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <div className="btn btn-primary" onClick={Login}>Login</div>
    </div>
  );
};
