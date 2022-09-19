import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export const ItemList = ({items}) => {
    return (
    <div className='item-list'> 
         {items.map(({id, codigo, precio, descripcion, categoria, imagen, stock}) => (                       
              <Item 
                id={id} 
                codigo={codigo}
                descripcion={descripcion}
                precio= {precio} 
                pictureUrl={imagen}
                stock = {stock}
                key={id}
                />  
        ))} 
    </div>
  )
}