import React, { createContext, useState, useEffect} from "react";

export const cartContext = createContext();
const { Provider } = cartContext

const CartCustomProvider = ({ children }) => {
    const [productos, setProductos]= useState([]);
    const [cantidadProductos, setCantidadProductos]= useState(0);

    const getCantidadProductos=() =>{
        let cantidad = 0;
        productos.forEach(producto => cantidad += producto.cantidad);
        setCantidadProductos(cantidad);
    };

    useEffect(() =>{
        getCantidadProductos();
    }, [productos])

    const clear =() =>{
        setProductos([]);
        setCantidadProductos(0)
    };
    const isInCart = (id) =>{
        return productos.some(producto => producto.id === id)
    };
    const borrarProducto = (id) =>{
        setProductos(productos.filter(producto => producto.id !== id))
    };
    const agregarProducto = (producto) =>{
        if(isInCart(producto.id)){
            const found = productos.find(p => p.id === producto.id);
            const index = productos.indexOf(found);
            const aux = [...productos];
            aux[index].cantidad += producto.cantidad
            setProductos(aux);
        }else{
            setProductos([...productos, producto]);
        }
    };
    const calcularTotal = ()=>{
        return productos.reduce((acumulado, actual)=> acumulado + actual.price * actual.cantidad, 0);
    };
    return(
        <Provider value={{ productos, agregarProducto, borrarProducto, cantidadProductos, clear, calcularTotal}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider