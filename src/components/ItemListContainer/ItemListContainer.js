
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';

const ItemListContainer = ({mensaje}) =>{

  return (
    <div className='list'>
      <p>{mensaje}</p>
    </div>
  )
}

export default ItemListContainer