"use client";

import React from 'react';
import useCounter from '/hooks/useCounter';

function ComponenteContador( ) {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}

export default ComponenteContador;