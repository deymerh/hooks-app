import React, { useState } from 'react';
import { MultipleCustomHooks } from '../example/MultipleCustomHooks';

export const RealExcampleCustomHook = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>RealExcampleRef</h1>
      <br />
      {show && <MultipleCustomHooks />}
      <button
        onClick={() => setShow(!show)}
        className="btn btn-primary mt-5"
      >
        Show/Hide
      </button>
    </div>
  )
}
