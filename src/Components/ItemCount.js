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
            <button class="btn black" onClick={() => ClickSuma()}>+</button>
            <button class="btn">{contador}</button>
            <button class="btn black" onClick={() => ClickResta()}>-</button>
            <button class="btn black" onClick={() => ClickAgregar()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount


