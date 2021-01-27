import React from 'react';
import { useForm } from '../../hooks/useForm';
import './SimpleForm.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }
  return (
    <form>
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
      <div className="form-group mt-2" >
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary mt-3"
      >
        Guardar
        </button>
    </form>
  )
}
