import { useState } from 'react';

function useClickCounter() {
// Inicializa o contador de cliques em 0
const [count, setCount] = useState(0);

// Função para incrementar o contador
const increment = () => setCount(count + 1);

// Retorna o valor do contador e a função para incrementá-lo
return [count, increment];

}

export default useClickCounter;