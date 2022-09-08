import { useEffect, useState } from 'react';
import './ItemCount.css';

export default function ItemCount ({stock, initial,  onAdd}) {
    const [count, setCount] = useState(initial);

    const agregar = () =>{
        setCount(count+1);
    }

    const quitar = () =>{
        setCount((valAnt) => (valAnt > 0 ? count-1 : count));
    }
    /* INICIALIZO EL VALOR A COMPRAR CON EL VALOR INICIAL DEL CONTADOR */
    useEffect(() => {
        onAdd(initial);
      }, []);

    return(
        <div className='itemcount-container'>
            <div className='itemcount'>
                <button onClick={quitar}>-</button>
                <h3>{count}</h3>
                <button onClick={agregar}>+</button>
            </div>
            <button className='btn-agregar' onClick= {() => {
                //condicional para ejecutar la funcion de agegar al carrito
                count <= stock && onAdd(count);
            }}>Agregar al carrito</button>
        </div>
    );
}


