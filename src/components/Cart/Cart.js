import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Cart = ()=> {
    const {productCartList, removeItem, clear} = useContext(CartContext); 
    console.log(productCartList.length)
    return (
        <div>
            <div className='titulo'>
                <p>Componente Cart</p>
                <button onClick={()=>{clear()}}>Vaciar carrito</button>
            </div>

            {
                productCartList.map(item=>(
                    <div className='item-container'>
                        <div className='item-row'>
                            <p>{item.descripcion}</p>
                            <p>{item.precio}</p>
                            <p>{item.cantidad}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}