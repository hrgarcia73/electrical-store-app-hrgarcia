import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) =>{
  return (
    <div className='list'>{greeting}</div>
  )
}

export default ItemListContainer