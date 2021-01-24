import React from 'react';
import { TodoListItem } from './TodoListItem';
import propTypes from 'prop-types';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            i={i}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      }
    </ul>
  );
};
TodoList.propTypes = {
  todos: propTypes.array.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleToggle: propTypes.func.isRequired
};