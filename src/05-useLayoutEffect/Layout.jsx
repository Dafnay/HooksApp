import { useCounter, useFetch } from "../hooks";
import { LoadingEpisode, Episode  } from "../03-examples";





export const Layout = () => {

    const {counter, increment, decrement} = useCounter(1); 
    const { data, isLoading, hasError} = useFetch (`https://rickandmortyapi.com/api/episode/${counter}`);
    

    const { episode, name} = !!data && data;


  return (
    <>
        <h1>Rick & Morty</h1>
        <hr />


        {
            isLoading
            ?  <LoadingEpisode />    
            :   <Episode episode={episode} name={name}/>
        }
       
      


        <button 
            className="btn btn-primary mt-2"
            disabled= {isLoading}
            onClick={() =>decrement() }>
            Previous Episode
        </button>

        <button 
            className="btn btn-primary mt-2"
            disabled= {isLoading}
            onClick={() =>increment() }>
            Next Episode
        </button>
        
    
    </>
  )
}
