import { mount } from 'enzyme';
import { LoginScreen } from '../../component/08-useContext/LoginScreen';
import { UserContext } from '../../component/08-useContext/UserContext';

describe('Pruebas en el componente <LoginScreen />', () => {
  const setUser = jest.fn();
  const user = {
    uid: 123456,
    name: 'Deymer',
    email: 'deymerh@hotmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Ejecutar el setUser con los argumentos esperados', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith(user);
  });

});
