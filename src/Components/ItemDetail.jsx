import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {
    return (
        <div>
            <h2>Detalle del producto</h2>
            <div style={styles.container}>
            <img src={productos.img} alt={productos.name}/> 
            </div>
            <p style={styles.text}>{productos.description}</p>
            <div style={styles.container}>
            <ItemCount stock= {productos.stock} initial={1} onAdd={contador => alert(`Se agregagon ${contador} items al carro`)} />
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