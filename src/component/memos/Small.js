import React from 'react';

export const Small = React.memo(({ value }) => {
  return (
    <div>
      <small>Counter:  {value} </small>
    </div>
  )
})
