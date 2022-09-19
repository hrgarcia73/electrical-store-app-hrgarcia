import React from 'react'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({item}) {
  const [verBotones, setVerBotones] = useState(false)
  const {addItem} = useContext(CartContext)
  
    const OnAdd = (count)=>{
      const newProduct = {...item, cantidad:count};
      addItem(newProduct);
      setVerBotones(true)
    }
    return (
      <div className='item-detail-card'>
        <h2>Detalle de producto {item.codigo}</h2>
          {<img src={item.imagen} alt={item.codigo} />}
          <p className='item-detail-description'><strong>Descripcion: </strong> {item.descripcion}</p>
          <p className='item-detail-price'><strong>Precio: </strong>${item.precio}</p>   
          <ItemCount 
            stock={item.stock} 
            initial={1} 
            onAdd={OnAdd}/>   

            {verBotones ? 
            <div>
              <Link to='/cart'>
                <button className='btn-finalizar-compra'>Finalizar mi compra</button>
              </Link> 
              <Link to='/'>
                <button className='btn-finalizar-seguir'>Seguir comprando</button>
              </Link> 
            </div>
            : ""}      
      </div>
    )
}
