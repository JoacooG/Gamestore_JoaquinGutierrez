import React, { useEffect, useState } from 'react'
import { getData } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ({})
    const [cargando, setCargando]= useState(true)
    
    useEffect (() =>{
        getData
        .then ((res) => setProductos (res.find ((Item) => Item.id === "01")))
        .catch ((error) => alert('Hubo un error, intente mas tarde'))
        .finally (() => setCargando(false))
    }, [])
    
    return (
        <div>
            {cargando ? <Spinner /> : <ItemDetail productos={productos}/>}
        </div>
    )
}

export default ItemDetailContainer