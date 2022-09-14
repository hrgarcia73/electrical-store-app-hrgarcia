import React from 'react';
import data from '../../data/productos.json';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);


  

    useEffect(() => {
      const getItem = async () => {
        try {
          const product = await data.find(el => el.id === parseInt(id));
          //console.log('itemId: ' + id);
          setItem(product);
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
            <ItemDetail item={item} />
          }
      </div>
      
    )
}
