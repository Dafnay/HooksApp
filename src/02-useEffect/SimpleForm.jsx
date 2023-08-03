import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dafnay',
        email: 'alba@gmail.com'
    });

    const {username, email} = formState

    const onInputChange = ({ target}) =>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }



    useEffect( () =>{
        // console.log('el useEffect se llamo');
    },[]);

    useEffect( () =>{
        // console.log('formState cambió');
    },[formState]);

    useEffect( () =>{
        // console.log('email changed');
    },[ email]);





  return (

    <>
    <h1>Formulario Simple</h1>

    <hr />

    <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        />
    <input 
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
        />
        {
            (username === 'dafnay1') &&  <Message />
        }
       
    </>
    
  )
}
