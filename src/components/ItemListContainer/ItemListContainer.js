
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({mensaje}) =>{

  return (
    <div className='list'>
      <p>{mensaje}</p>
      <ItemCount 
        stock={10} 
        initial={1} 
        onAdd={(n)=> alert(`Agregados ${n} productos`)}/>
    </div>
  )
}

export default ItemListContainer