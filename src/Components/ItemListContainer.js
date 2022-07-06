import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { getData } from "../mocks/fakeApi";
import { useParams } from "react-router";

const ItemListContainer = ({ greetings }) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando]= useState(true)
    const { categorias } = useParams ()

    useEffect(() =>{
        getData
        .then((res) =>{
            if (!categorias) {
            setListaProductos(res)
            }else{
                setListaProductos(res.filter((productos)=> productos.category === categorias))
            }
        })
        .catch ((error) => alert('Hubo un error, intente mas tarde'))
        .finally (() => setCargando(false))
    },[categorias])

    console.log(listaProductos)
    return(
        <>
        <h1>{greetings}</h1>
        {cargando ? <Spinner /> : <ItemList  listaProductos={listaProductos}/>}
        </>
    )
}

export default ItemListContainer