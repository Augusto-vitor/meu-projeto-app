'use client'

import Link from 'next/link';
import React from 'react';
import useClickCounter from '@/Hooks/useClickCounter';

function ContadorDeCliques() {
// Chama o hook useClickCounter para obter o contador e a fun
const [count, increment] = useClickCounter();

return (
<div>
<p>Você clicou {count} vezes</p>
<button onClick={increment}>Clique aqui</button>
</div>
);
}

export default ContadorDeCliques;