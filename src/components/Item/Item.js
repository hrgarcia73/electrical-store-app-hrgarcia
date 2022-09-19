import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

export default function Item({ id, codigo, descripcion, precio, pictureUrl, stock }) {
  return (
    
    <div className='item-card'>
      <Link key={id} to={`/item/${id}`}> 
        <h2 className='item-title'>{codigo}</h2>
        {<img src={pictureUrl} alt={codigo} />}
        <p className='item-description'><strong>Descripcion: </strong> {descripcion}</p>
        <p className='item-price'><strong>Precio: </strong>${precio}</p>
        <p className='item-stock'><strong>Stock disponible: </strong>{stock} unidades</p>  
      </Link>    
    </div>
  )
}
