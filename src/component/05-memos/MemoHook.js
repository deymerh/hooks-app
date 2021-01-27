import React, { useMemo, useState } from 'react';
import { procecesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../example/style.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5);
  const [show, setShow] = useState(false);

  const memoProcesoPesado = useMemo(() => procecesoPesado(counter), [counter])
  return (
    <div>
      <small>Counter:  {counter} </small>
      <hr />
      <p> {memoProcesoPesado} </p>
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
          className="btn btn-outline-primary mt-4"
          onClick={() => setShow(!show)}
        >
          {JSON.stringify(show)}
        </button>
      </div>
    </div>
  )
}
