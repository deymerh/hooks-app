import React from 'react';
import { shallow } from 'enzyme';
import { RealExcampleCustomHook } from '../../../component/04-useRef/RealExcampleRef';

describe('Pruebas en en el componente <RealExcampleRef/>', () => {

  const wrapper = shallow(<RealExcampleCustomHook />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('Debe mostrar el componente <MultipleCustomHooks/> de acuerdo al click', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });


});
