import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../example/style.css';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);
  return (
    <div>
      <Small value={counter} />
      <hr />
      <div>
        <button
          className="btn btn-primary"
          onClick={increment}
        >
          Incrementar en 1
      </button>
      </div>
      <div>
        <button
          className="btn btn-primary mt-4"
          onClick={() => setShow(!show)}
        >
          {JSON.stringify(show)}
        </button>
      </div>
    </div>
  )
}
