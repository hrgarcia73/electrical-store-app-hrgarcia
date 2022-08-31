
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import data from '../../data/productos.json';

const ItemListContainer = ({mensaje}) =>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await data;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout( function() {
      console.log('fin espera');
      getProducts();
    }, 3000);
  }, []);

  return (
    <div className='list'>
      <p>{mensaje}</p>
      <ItemCount 
        stock={10} 
        initial={1} 
        onAdd={(n)=> alert(`Agregados ${n} productos`)}/>
        {loading ? <span>Loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer