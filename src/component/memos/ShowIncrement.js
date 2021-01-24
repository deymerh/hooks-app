import React, { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Again');
  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => increment(5)}
    >
      +1
    </button>
  )
});
