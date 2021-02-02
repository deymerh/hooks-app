import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null
    })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data: data
          })
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        })
      })
  }, [url])
  return state;
}
