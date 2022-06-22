import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const CartWidget = () => {
    return (
        <IconContext.Provider value={{size: "25px"}}>
        <FaShoppingCart />
        </IconContext.Provider>
    )
}

export default CartWidget