import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export const ItemList = ({items}) => {
    console.log(items);
    return (
    <div className='item-list'>
         {items.map(({id, title, price, description, category, image, rating}) => (            
            <Item 
            id={id} 
            title={title}
            description={description}
            price={price} 
            pictureUrl={image}  
            stock = {rating.count}
            key={id}
            />  
        ))} 

    </div>
  )
}