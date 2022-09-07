
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import data from '../../data/productos.json';
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
  const {categoria} = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await data;
        if (!categoria){
          setProducts(response);
        } else{
          const filtro = response.filter(item=>item.categoria === categoria);
          setProducts(filtro);
        }
          
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
  }, [categoria]);

  return (
    <div className='list'>
      {!categoria ? <h2>Todos los productos </h2> : <h2>Productos de categoria {categoria}</h2>}
        {loading ? <span>Loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer