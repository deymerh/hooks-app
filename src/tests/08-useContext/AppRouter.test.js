import { mount } from 'enzyme';
import { AppRouter } from '../../component/08-useContext/AppRouter';
import { UserContext } from '../../component/08-useContext/UserContext';

describe('Pruebas en el <AppRouter />', () => {
  const user = {
    id: 123,
    name: 'Deymer'
  }
  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <AppRouter />
    </UserContext.Provider>
  )

  test('Renderizarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
