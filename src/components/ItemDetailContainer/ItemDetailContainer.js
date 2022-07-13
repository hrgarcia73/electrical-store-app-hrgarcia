import React from 'react';
import data from '../../products.json';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {
    const id=6;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const getItem = async () => {
        try {
          const item = await data.find(el => el.id = id);
          console.log(item);
          setProduct(item);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      setTimeout( function() {
        console.log('fin espera');
        getItem();
      }, 3000);
    }, []);
  
    return (
      <div className='item-detail-container'>
  
          {loading ? <span>Loading...</span> : 
          
            <ItemDetail             
                id={product.id} 
                title={product.title}
                description={product.description}
                price={product.price} 
                pictureUrl={product.image}  
                stock = {product.rating.count} />} 
      </div>
    )
}
