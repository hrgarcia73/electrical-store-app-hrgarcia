import React from 'react';
import data from '../../data/productos.json';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

export default function ItemDetailContainer({itemId}) {
  
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const cadena = "sin-imagen-disponible.jpg";

    useEffect(() => {
      const getItem = async () => {
        try {
          const item = await data.find(el => el.id = itemId);
          console.log('itemId: ' + itemId);
          setProduct(item);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      setTimeout( function() {
        console.log('fin espera detail container');
        getItem();
      }, 3000);
    }, []);
  
    return (
      <div className='item-detail-container'> 
         {loading ? <span>Loading...</span> :           
            <ItemDetail             
            codigo={product.codigo}
            descripcion={product.descripcion}
            precio= {product.precio} 
            pictureUrl={require(`../../data/img/${cadena}`)}  
            />
          }
      </div>
      
    )
}
