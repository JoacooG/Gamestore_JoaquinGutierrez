import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [contador, setContador] = useState(initial);

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

    const ClickAgregar = () => {
        onAdd(contador);
    }

    return (
        <>
            <h2>{contador}</h2>
            <button class="btn blue" onClick={() => ClickSuma()}>+</button>
            <button class="btn red" onClick={() => ClickResta()}>-</button>
            <button class="btn blue" onClick={() => ClickAgregar()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount


