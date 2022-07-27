import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext

const STORAGE_KEY_NAME = "products"

function readLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY_NAME)) {
    return [];
  }

  try {
    const products = localStorage.getItem(STORAGE_KEY_NAME);
    return JSON.parse(products);
  } catch (e) {
    return [];
  }
}

const CartCustomProvider = ({ children }) => {
  const [productos, setProductos] = useState(() => readLocalStorage());
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const getCantidadProductos = () => {
    let cantidad = 0;
    productos.forEach(producto => cantidad += producto.cantidad);
    setCantidadProductos(cantidad);
  };

  useEffect(() => {
    getCantidadProductos();
    localStorage.setItem("products", JSON.stringify(productos));
  }, [productos])

  const clear = () => {
    setProductos([]);
    setCantidadProductos(0)
    localStorage.clear()
  };
  const isInCart = (id) => {
    return productos.some(producto => producto.id === id)
  };
  const borrarProducto = (id) => {
    setProductos(
      productos.filter(producto => producto.id !== id),
    )
  };
  const agregarProducto = (producto) => {
    if (isInCart(producto.id)) {
      const found = productos.find(p => p.id === producto.id);
      const index = productos.indexOf(found);
      const aux = [...productos];
      aux[index].cantidad += producto.cantidad
      setProductos(aux);
    } else {
      setProductos([...productos, producto]);
    }
  };
  const calcularTotal = () => {
    return productos.reduce((acumulado, actual) => acumulado + actual.price * actual.cantidad, 0);
  };

  return (
    <Provider value={{ productos, agregarProducto, borrarProducto, cantidadProductos, clear, calcularTotal }}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider