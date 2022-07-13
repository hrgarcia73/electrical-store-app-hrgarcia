import React from 'react'

export default function ItemDetail({ id, title, description, price, pictureUrl, stock }) {
    return (
      <div className='item-card'>
          <h2 className='item-title'>{title}</h2>
          <img src={pictureUrl} alt={title} />
          <p className='item-description'><strong>Description: </strong> {description}</p>
          <p className='item-price'><strong>Price: </strong>${price}</p>
          <p className='item-stock'><strong>Aviable Stock: </strong>{stock} units</p>      
      </div>
    )
}
