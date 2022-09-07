import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import {Link} from 'react-router-dom';

export const ItemList = ({items}) => {
  const cadena = "sin-imagen-disponible.jpg";
    return (
    <div className='item-list'> 
         {items.map(({id, codigo, precio, descripcion, categoria, imagen, stock}) => (            
            <Link key={id} to={`/item/${id}`}>             
              <Item 
                id={id} 
                codigo={codigo}
                descripcion={descripcion}
                precio= {precio} 
                pictureUrl={require(`../../data/img/${cadena}`)}  
                stock = {stock}
                key={id}
                />  
            </Link> 
        ))} 
    </div>
  )
}