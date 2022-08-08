import React from "react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) =>{
    return(
        <>
        <h3>Juegos</h3>
        <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {listaProductos.map((productos) => <Item key={productos.id} productos={productos}/>)}
        </div>
        </>
    )
}

export default ItemList