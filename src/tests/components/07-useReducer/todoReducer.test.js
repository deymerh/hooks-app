import { todoReducer } from "../../../component/07-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en el todoReducer', () => {

  test('Debe retornar los valores por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Debe agregar una tarea', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Ingles',
      done: false
    };
    const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe borrar un TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Ingles',
      done: false
    };
    const state = todoReducer(demoTodos, { type: 'delete', payload: newTodo.id });
    expect(state.length).toBe(2);
  });

  test('Debe hacer el TOGGLE del TODO', () => {
    // const newTodo = {
    //   id: 3,
    //   desc: 'Aprender Ingles',
    //   done: false
    // };
    const state = todoReducer(demoTodos, { type: 'toggle', payload: 1 });
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });

});


