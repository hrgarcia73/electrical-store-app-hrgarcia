import React from 'react';
import data from '../../data/productos.json';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const cadena = "sin-imagen-disponible.jpg";

    useEffect(() => {
      const getItem = async () => {
        try {
          const item = await data.find(el => el.id === parseInt(id));
          console.log('itemId: ' + id);
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
    }, [id]);
  
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
