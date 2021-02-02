import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Pruebas en el useCounter.js', () => {
  test('Debe renderizar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.counter).toBe('number');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Al ejecutar las funciones se debe esperar el valor correcto', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, decrement, reset } = result.current;
    act(() => {
      increment();
    });
    console.log('Despues del increment', result.current.counter);
    expect(result.current.counter).toBe(101);
    act(() => {
      decrement();
    });
    console.log('Despues del decrement', result.current.counter);
    expect(result.current.counter).toBe(99);
    act(() => {
      reset();
    });
    console.log('Despues del reset', result.current.counter);
    expect(result.current.counter).toBe(100);
  });

});
