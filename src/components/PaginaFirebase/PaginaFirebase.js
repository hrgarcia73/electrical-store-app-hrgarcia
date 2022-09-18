import './PaginaFirebase.css';
import { useEffect, useState } from 'react';
import {collection, getDocs, doc, getDoc} from 'firebase/firestore';
import {db} from '../../utils/firebase';
import { async } from '@firebase/util';

export const PaginaFirebase =() =>{
    const [arregloProductos, setArregloProductos] = useState([]);
    useEffect(() => {
        const getColeccion = async() =>{
            //Creamos una referencia a la base de datos
            const query = collection(db,"items");
            const respuesta = await getDocs(query);
            const docs = respuesta.docs;
            console.log(docs);
            // console.log("doc info ", docs[0].data());
            // console.log("doc id ", docs[0].id);
            const data = docs.map(doc=>{return{...doc.data(), id:doc.id}});
            //console.log(data);
            setArregloProductos(data);
        }
        //getColeccion();
        const getDocumento = async() => {
            const query = doc(db, "items","WCWztXm1MJoSBZXT8qpS");
            const respuesta = await getDoc(query);
            //console.log(respuesta);
            const documento = {...respuesta.data(), id:respuesta.id};
            console.log("documento", documento);
        }
        getDocumento();
    }, [])
    return(
        <div className="main">
            <p>Componente PaginaFirebase</p>
        </div>

    )
}