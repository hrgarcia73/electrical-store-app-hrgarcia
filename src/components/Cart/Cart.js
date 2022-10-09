import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = ()=> {
    const {productCartList, removeItem, clear} = useContext(CartContext); 

    return (
        <div className='cart-main'>                
                {
                productCartList.length>=1 ?
                    <>
                        <div className="cart-item-header">
                            <p className='cart-item-header-image'>Imagen</p>
                            <p className='cart-item-header-description'>Referencia</p>        
                            <p className='cart-item-header-price'>Precio Unitario</p>
                            <p className='cart-item-header-count'>Cantidad</p>
                            <p className='cart-item-header-subtotalprice'>Sub total</p>
                        </div>            
                        {
                        productCartList.map(item=>(
                                <div className="cart-item" key={item.id}>
                                    <img className='cart-item-image' src={item.imagen} alt={item.codigo} />
                                    <div className='cart-item-article'>
                                        <h2>{item.codigo}</h2>
                                        <p className='cart-item-description'>{item.descripcion}</p>
                                    </div>
                                    <p className='cart-item-price'>${item.precio}</p>
                                    <p className='cart-item-count'>{item.cantidad}</p>
                                    <p className='cart-item-subtotalprice'>${item.precioTotal}</p>
                                    <button className='cart-item-delete' onClick={()=>removeItem(item.id)}>Eliminar</button>
                                </div>              
                        ))
                        } 

                    <br/> 
                    <br/> 
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
    )
}

