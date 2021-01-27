import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { state, decrement, increment, reset } = useCounter(100);

  return (
    <>
      <h1>Counter With CustomHook {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>+ 1</button>
      <br />
      <button className="btn btn-primary mt-3" onClick={decrement}>- 1</button>
      <br />
      <button className="btn btn-primary mt-3" onClick={reset}>Reset</button>
    </>
  )
}
