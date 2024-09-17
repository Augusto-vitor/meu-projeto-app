import { useState } from 'react';

function useCounter( initialValue = 0) {
    const [cont, setCount] = useState(initialValue);


    const incremet = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) = preveCount - 1);
    const reset = () => setCount(initialValue);
    return { cont, incremet, decrement, reset };
}

export default useCounter;