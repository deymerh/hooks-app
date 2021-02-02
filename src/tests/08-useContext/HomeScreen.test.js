const { mount } = require('enzyme');
const { HomeScreen } = require('../../component/08-useContext/HomeScreen');
const { UserContext } = require('../../component/08-useContext/UserContext');

describe('Pruebas en el componente <HomeScreen />', () => {

  const user = {
    name: 'Deymer',
    email: 'deymer@gmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('Debe mostarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
