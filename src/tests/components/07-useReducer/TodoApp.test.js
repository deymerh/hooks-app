const { act } = require('@testing-library/react');
const { shallow, mount } = require('enzyme');
const { TodoApp } = require('../../../component/07-useReducer/TodoApp');
const { demoTodos } = require('../../fixtures/demoTodos');

describe('Pruebas en el componente <TodoApp />', () => {

  Storage.prototype.setItem = jest.fn(() => { })
  const wrapper = shallow(<TodoApp />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe agregar un TODO', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)')
    expect(localStorage.setItem).toBeCalledTimes(2);
  });

  test('Debe eliminar un TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
  });

});
