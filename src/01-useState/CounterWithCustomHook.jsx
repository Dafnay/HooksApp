import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {

const { counter, increment, decrement, reset } = useCounter();



  return (

    <>
    <h1> Counter with Hook: { counter }</h1>
    <hr />

{/* 
    el onClick necesita pasar el evento, por eso se ponen los ()=> y detrás de la función el valor
    que queremos incrementar o reducir, en este caso es de 2 en 2 */}
    <button className="btn btn-primary" onClick={ () => increment(2)}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={ () => decrement(2)}>-1</button>


    </>
  )
}
