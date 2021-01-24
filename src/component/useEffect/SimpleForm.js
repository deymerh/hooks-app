import React, { useState } from 'react';
import { Message } from './Message';
import './SimpleForm.css';

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: '',
    email: ''
  });
  const { name, email } = formState;
  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value
    });
  };
  return (
    <>
      <h2>useEffect</h2>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          autoCapitalize="on"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-2" >
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          autoCapitalize="on"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {
        name === '123' && <Message />
      }
    </>
  )
}
