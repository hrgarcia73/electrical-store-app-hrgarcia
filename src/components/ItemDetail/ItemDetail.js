import React from 'react'
import './ItemDetail.css'

export default function ItemDetail({codigo, precio, descripcion, pictureUrl }) {
    return (
      <div className='item-detail-card'>
        <h2>Detalle de producto {codigo}</h2>
          {<img src={pictureUrl} alt={codigo} />}
          <p className='item-detail-description'><strong>Descripcion: </strong> {descripcion}</p>
          <p className='item-detail-price'><strong>Precio: </strong>${precio}</p>     
      </div>
    )
}
