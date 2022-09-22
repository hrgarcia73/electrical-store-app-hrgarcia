import './Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';

import {collection, addDoc, doc, updateDoc} from "firebase/firestore";

export const Cart = ()=> {
    const {productCartList, removeItem, clear, getPrecioTotal} = useContext(CartContext); 
    const [idOrder, setIdOrder] = useState("");
    let today = new Date();

    const sendOrder = (e) => {
      e.preventDefault();
        const order = {
          buyer: {
            name:e.target[0].value,
            phone:e.target[1].value,
            email:e.target[2].value  
          },
          items: productCartList,
          date: today.toLocaleString(),
          total: getPrecioTotal()
      }
      const orderCollection = collection(db,"orders");
      addDoc(orderCollection, order).then(({id}) => {
        setIdOrder(id);
        alert("La orden ha sido creada con exito, \n el número de orden es: " + id);
        clear();

    }); 
    }

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

                      <form onSubmit={sendOrder}>
                        <input type="text" placeholder='nombre'/>
                        <input type="text" placeholder='telefono'/>
                        <input type="email" placeholder='email'/>
                        <button type='submit'>enviar orden</button>
                      </form>      
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

