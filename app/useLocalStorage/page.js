"use client";

import React from "react";
import useLocalStorage from "/Hooks/useLocalStorage";

function ComponenteLocalStorage() {
    const [name, setName] = useLocalStorage('name', '');

        return (
            <div>
                <input 
                type="text"
                value={name}
                onChange={ (e) => setName(e.target.value)}
                placehoder="Digite seu name">
                
                </input>
                <p>Nome armazenado: {name}</p>
    </div>
  );
}

export default ComponenteLocalStorage