import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router';
import { cartContext } from '../Context/CartContext';

const ItemDetail = ({productos}) => {

    const initial = 1;

    const [contador, setContador] = useState(initial);

    const [compra, setCompra] = useState(false);

    const { agregarProducto } = useContext(cartContext);

    const navegar = useNavigate();

    const onAdd = (contador) => {
        agregarProducto({...productos, cantidad: contador});
        setCompra(true)

    }
    

    return (
        <div>
            <h2>Detalle del producto</h2>
            <div style={styles.container}>
            <img src={productos.img} alt={productos.name}/> 
            </div>
            <p style={styles.text}>{productos.description}</p>
            <div style={styles.container}>
            {compra ? <button className="btn blue" onClick={()=>navegar('/cart')}>Ir al carrito</button> : <ItemCount stock={productos.stock} initial={1} contador={contador} setContador={setContador} onAdd={onAdd} />}
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'red',
        textAlign: 'center',
        fontSize: 'medium',
        fontWeight: 'bold'

    }
}

export default ItemDetail