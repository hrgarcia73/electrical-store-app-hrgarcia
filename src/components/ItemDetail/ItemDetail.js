import React from 'react'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function ItemDetail({codigo, precio, descripcion, pictureUrl }) {

  /* CREO VARIABLE PARA ALMACENAR LA CANTIDAD A COMPRAR Y LA VINCULO CON LA FUNCION OnAdd 
     QUE LE PASAMOS AL COUNTER PARA QUE NOS ACTUALICE EL VALOR DE CANTIDAD A COMPRAR 
  */
  const [cantidad, OnAdd] = useState(0);

    return (
      <div className='item-detail-card'>
        <h2>Detalle de producto {codigo}</h2>
          {<img src={pictureUrl} alt={codigo} />}
          <p className='item-detail-description'><strong>Descripcion: </strong> {descripcion}</p>
          <p className='item-detail-price'><strong>Precio: </strong>${precio}</p>   
          <p> <strong>Cantidad a comprar: </strong> {cantidad}</p>
          <ItemCount 
            stock={10} 
            initial={1} 
            onAdd={OnAdd}/>  
                      
            <Link to='/cart'>
              <button className='btn-finalizar-compra'>Finalizar mi compra</button>
            </Link>
          
      </div>
    )
}
