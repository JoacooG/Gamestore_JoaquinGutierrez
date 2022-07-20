import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { useParams } from "react-router";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "@firebase/firestore";


const ItemListContainer = ({ greetings }) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando]= useState(true)
    const { categorias } = useParams ()

    useEffect(() =>{
    
        const coleccionProductos = collection(db, 'productos');

        const q = query(coleccionProductos, where('category', '==', categorias));

        getDocs(categorias ? q : coleccionProductos)
            .then(result =>{
                const lista = result.docs.map (doc =>{
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setListaProductos(lista)
            })
            .catch(error => console.log(error))
            .finally(()=> setCargando(false))
    }, [categorias]);

    return(
        <>
        <h1>{greetings}</h1>
        {cargando ? <Spinner /> : <ItemList  listaProductos={listaProductos}/>}
        </>
    )
 }

export default ItemListContainer