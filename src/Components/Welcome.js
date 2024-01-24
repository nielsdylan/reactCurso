import { useState, useEffect } from "react";

export default function Welcome(props) {

    const [counter, setCounter] = useState(0);
    const [ semaforo, setSemaforo ] = useState(false);
    const {mensaje, name} = props;

    useEffect(() => {
        console.log(semaforo);
    
    }, [semaforo])
    
    const contar = () => {
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }
    return (
        <div>
            <p>Hoal {name}</p>
            <p>{mensaje}</p>
            <h4> el numero del contador es {counter}</h4>
            <p> el semaforo es {semaforo ? 'red' : 'green' }</p>
            <button  onClick={contar}>Sumar contador</button>
            
        </div>
        
    );
}