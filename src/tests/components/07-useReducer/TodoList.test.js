import { shallow } from 'enzyme';
import { TodoList } from '../../../component/07-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(<TodoList
    todos={demoTodos}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
  />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener la cantidad de items envados como parametro', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });
});
