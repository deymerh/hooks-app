import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, resetValues] = useForm({
    description: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    };
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    handleAddTodo(newTodo);
    resetValues();
  };
  return (
    <>
      <h5>Agregar TODO</h5>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender..."
          className="form-control"
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-2"
        >
          Agregar
          </button>
      </form>
    </>
  );
};
