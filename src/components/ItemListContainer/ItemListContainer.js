
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../utils/firebase';

const ItemListContainer = () =>{
  const {categoria} = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        //const response = await data;
        //Creamos una referencia a la base de datos
        const query = collection(db,"items");
        const respuesta = await getDocs(query);
        const docs = respuesta.docs;
        const data = docs.map(doc=>{return{...doc.data(), id:doc.id}});
        
        if (!categoria){
          setProducts(data);
        } else{
          const filtro = data.filter(item=>item.categoria === categoria);
          setProducts(filtro);
        }
          
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [categoria]);

  return (
    <div className='list'>
      {!categoria ? <h2>Todos los productos </h2> : <h2>Productos de categoria {categoria}</h2>}
        {loading ? <span>Loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer