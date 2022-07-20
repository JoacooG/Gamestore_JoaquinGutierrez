import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { doc, getDoc, collection } from '@firebase/firestore'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ({})
    const [cargando, setCargando]= useState(true)
    const {id} = useParams ()
    
    useEffect (() =>{
        const coleccionProductos = collection(db, 'productos');
        const refDoc = doc(coleccionProductos, id)

        getDoc(refDoc).then(result => {
            setProductos({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(error => console.log(error))
        .finally (() => setCargando(false))
    }, [id]);
    
    return (
        <div>
            {cargando ? <Spinner /> : <ItemDetail productos={productos}/>}
        </div>
    )
}

export default ItemDetailContainer