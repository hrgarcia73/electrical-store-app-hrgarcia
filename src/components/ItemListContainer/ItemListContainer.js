
import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, where, query} from 'firebase/firestore';
import {db} from '../../utils/firebase';

const ItemListContainer = () =>{
  const {categoria} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!categoria){
          //Creamos una referencia a la base de datos
          const query = collection(db,"items");
          const respuesta = await getDocs(query);
          const docs = respuesta.docs;
          const data = docs.map(doc=>{return{...doc.data(), id:doc.id}});
          setProducts(data);
        } else{
          //filtro de la coleccion para obterer solo las categorias
          const database = getFirestore();
          const filtro = query(collection(database,"items"), where("categoria", "==", categoria));
          const snapshot = await getDocs(filtro);
          console.log(snapshot.size, snapshot);
          setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
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
      {!categoria ? <h2 className="titulo">Todos los productos </h2> : <h2 className="titulo">Productos de categoria {categoria}</h2>}
        {loading ? <span>Loading...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer