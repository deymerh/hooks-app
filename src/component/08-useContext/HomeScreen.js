import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div className="container-fluid">
        <button
          onClick={() => setUser({})}
          className="btn btn-outline-danger"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
