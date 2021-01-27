import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coors, setCoors] = useState({ x: 0, y: 0 })
  const { x, y } = coors;
  const mouseMove = (e) => {
    const coors = { x: e.x, y: e.y }
    setCoors(coors)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)
    console.log('Componente montado')
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log('Componente desmontado')
    }
  }, [])
  return (
    <>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </>
  )
};
