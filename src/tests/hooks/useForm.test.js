import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'deymer',
    email: 'deymerh@hotmail.com'
  };
  test('Debe regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, resetValues] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof resetValues).toBe('function');
  });

  test('Debe cambiar el valor de los campos del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Lorem'
        }
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...values, name: 'Lorem' });
  });
  test('Debe re-establecer el valor del fromulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, resetValues] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Lorem'
        }
      });
      resetValues();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  })

});
