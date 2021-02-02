import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../component/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
//NO me inporta la implementacion solo me interesan los resultados
//por eso usamos mosk
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en el componentes <MultipleCustomHooks />', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => { }
    });
  });

  test('Debe mostrar el componente correctamente', () => {
    useFetch.mockReturnValue({
      loading: true,
      error: null,
      data: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar la informacion de manera correacta', () => {
    useFetch.mockReturnValue({
      loading: false,
      error: null,
      data: [{
        author: 'Deymer',
        quote: 'Hola mundo'
      }]
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Deymer');
    // console.log(wrapper.html());
  });


});
