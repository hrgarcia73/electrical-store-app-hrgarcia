import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = ()=> {
    const {productCartList, removeItem, clear, getPrecioTotal} = useContext(CartContext); 
    return (
        <div>
            <div className='titulo'>
                <p>Componente Cart</p>
                
                {
                productCartList.length>=1 ?
                    <>
                    {
                    productCartList.map(item=>(
                        <>
                            <p>Descripción: {item.descripcion}</p>
                            <p>Precio unitario: ${item.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio total: ${item.precioTotal}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                        </>    
                    ))
                    }   
                    <br/> 
                    <br/> 
                    <p>Valor total de la compra: ${getPrecioTotal()}</p>
                    <br/>  
                    <br/> 
                    <button onClick={()=>{clear()}}>Vaciar carrito</button>             
                    </>
                    :
                    <div>
                        <p>No hay productos en el carrito</p>
                        <Link to='/'>
                            <p>Buscar algo para comprar</p>
                        </Link> 
                    </div>

            }
            </div>

        </div>
    )
}

