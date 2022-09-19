import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../utils/firebase';


export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getItem = async () => {
        try {
          //const product = await data.find(el => el.id === parseInt(id));
          const query = doc(db, "items",id);
          const respuesta = await getDoc(query);
          const product = {...respuesta.data(), id:respuesta.id};

          setItem(product);
          
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
        getItem();
    }, [id]);
  
    return (
      <div className='item-detail-container'> 
         {loading ? <span>Loading...</span> :           
            <ItemDetail item={item} />
          }
      </div>
      
    )
}
