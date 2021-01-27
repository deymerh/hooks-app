import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

export const MultipleCustomHooks = () => {
  const [sizeBox, setSizeBox] = useState({})
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1${counter}`);
  const { author, quote } = !!data && data[0];
  const boxRef = useRef();
  useLayoutEffect(() => {
    setSizeBox(boxRef?.current?.getBoundingClientRect());
  }, [quote])
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      { loading && (
        <p className="alert alert-info text-center">Loading...</p>
      )}

      { !loading && (
        <>
          <blockquote className="blockquote right">
            <p ref={boxRef} className="mb-0"> {quote} </p>
            <footer className="blockquote-footer mt-1">{author}</footer>
          </blockquote>
          <blockquote>
            <pre> {JSON.stringify(sizeBox, null, 3)} </pre>
          </blockquote>
          <div>
            <button
              onClick={increment}
              className="btn btn-primary">
              Siguiente quote
        </button>
          </div>
        </>
      )}
    </div>
  )
}
