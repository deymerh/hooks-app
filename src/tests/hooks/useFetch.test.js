import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Prubas sobre el useFetch', () => {
  test('Debería retornar un objeto como valor inicial', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
  test('Debe retornar la informacion deseada, loading false y error false', async () => {
    const { result, waitForNextUpdate } = await renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/2'));
    await waitForNextUpdate({ timeout: 9000 })
    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test('Debe manejar el error', async () => {
    const { result, waitForNextUpdate } = await renderHook(() => useFetch('https://reqres.in/apin/users?page=2'));
    await waitForNextUpdate({ timeout: 9000 })
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });

});
