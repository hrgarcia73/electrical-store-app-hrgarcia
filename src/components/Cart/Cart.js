import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = ()=> {
    const {productCartList, removeItem, clear, getPrecioTotal} = useContext(CartContext); 
    return (
        <div>
            <div className='cart-container'>
                <h3>Contenido del carito</h3>
                
                {
                productCartList.length>=1 ?
                    <>
                    <table className='table-fill'>
                        <thead>
                            <tr>
                                <th className='table-left'>Imagen</th>
                                <th className='table-left'>Descripción</th>
                                <th className='table-left'>Precio unitario</th>
                                <th className='table-left'>Catidad</th>
                                <th className='table-left'>Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        productCartList.map(item=>(
                            <>
                                <tr>
                                    <td className='text-left'><img src={item.imagen} alt={item.codigo} />
                                        <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                                    </td>
                                    <td className='text-left'>{item.descripcion}</td>
                                    <td className='text-left'>${item.precio}</td>
                                    <td className='text-left'>{item.cantidad}</td>
                                    <td className='text-left'>${item.precioTotal}</td>
                                </tr>
                                                 
                            </>    
                        ))
                        }  
                        </tbody>
                    </table> 
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

