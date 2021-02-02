import { shallow } from 'enzyme';
import { TodoListItem } from '../../../component/07-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el componente <TodoListItem/>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(<TodoListItem
    todo={demoTodos[1]}
    i={0}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
  />);

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe llamar la funcion HandleDelete', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test('Debe llamar la funcion HnadleToggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test('Debe mostrar el texto del párrafo correctamente', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1. ${demoTodos[1].desc}`)
  });

  test('Debe tener la clase complete cuando el TODO.done = true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem
      todo={todo}
    />);
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });

});
