import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { cartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { cantidadProductos } = useContext(cartContext)

    return (
        <div style={{width:'3rem',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <IconContext.Provider value={{size: "25px"}}>
        <FaShoppingCart />
        </IconContext.Provider>
        <p>{cantidadProductos}</p>
        </div>

    )
}

export default CartWidget