import React from "react";

const ItemCount = ({ stock, contador, setContador, onAdd }) => {
    
    

    const ClickSuma = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const ClickResta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <button class="btn black" onClick={() => ClickSuma()}>+</button>
            <button class="btn disabled">{contador}</button>
            <button class="btn black" onClick={() => ClickResta()}>-</button>
            <button class="btn black" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount


