import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greetings }) => {
    return(
        <>
        <h1>{greetings}</h1>
        <ItemCount  stock= {10} initial={1} onAdd={contador => alert(contador)}/>
        </>
    )
}

export default ItemListContainer