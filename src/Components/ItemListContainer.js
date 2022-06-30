import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { getData } from "../mocks/fakeApi";

const ItemListContainer = ({ greetings }) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando]= useState(true)
   
    useEffect(() =>{
        getData
        .then((res) => setListaProductos(res))
        .catch ((error) => alert('Hubo un error, intente mas tarde'))
        .finally (() => setCargando(false))
    },[])

    console.log(listaProductos)
    return(
        <>
        <h1>{greetings}</h1>
        {cargando ? <Spinner /> : <ItemList  listaProductos={listaProductos}/>}
        </>
    )
}

export default ItemListContainer