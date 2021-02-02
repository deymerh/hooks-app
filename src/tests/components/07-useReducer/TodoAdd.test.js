import { shallow } from "enzyme";
import { TodoAdd } from "../../../component/07-useReducer/TodoAdd";

describe('Pruebas en componente <TodoAdd />', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd
    handleAddTodo={handleAddTodo}
  />);

  test('Renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('NO debe llamar el handleAddTodo', () => {
    const formSummit = wrapper.find('form').prop('onSubmit');
    formSummit({ preventDefault() { } })
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe llamar a la function handleAddTodo', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });
    const formSummit = wrapper.find('form').prop('onSubmit');
    formSummit({ preventDefault() { } })
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });

});
