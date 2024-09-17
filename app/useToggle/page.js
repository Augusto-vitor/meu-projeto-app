"use client";

import React from 'react';
import useToggle from '/Hooks/useToggle';

function ComponenteToggle() {
  const [inVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {inVisible ? 'Esconder' : 'Mostrar'} Texto
      </button>
      {inVisible && <p>Este é o texto que pode ser escondido ou mostrado!</p>}
    </div>
  )
}

export default ComponenteToggle;