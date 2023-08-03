import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)


    // si queremos incrementar el valor con otro tipo de números
    // se puede poner value = al valor que queremos incrementar de cada vez
    const increment = ( value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        // if (counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }
 
    return {
        counter,
        increment,
        decrement,
        reset
    }
}