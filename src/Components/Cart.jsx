import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "@firebase/firestore";

const Cart = () =>{
   
   const { productos, borrarProducto, clear, calcularTotal } = useContext(cartContext);
   const navegar = useNavigate();

   
  const [idVenta, setIdVenta] = useState('')

  const datosComprador = {
  
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: productos,
      date: serverTimestamp(),
      total: calcularTotal,
    })
    .then((result) =>{
      setIdVenta(result.id)
    })

    const updateCollection = doc(db, "productos", productos.id);
    updateDoc(updateCollection,{stock: productos.stock - productos.cantidad})

  }


   if (productos.length === 0) {
      return <div>
             <Link to='/'><h2 style={{display:'flex', color:'red', justifyContent:'center'}}>Esta vacio, que esperas para elegir tu proximo juego?!</h2></Link>
             <div style={{display:'flex', justifyContent:'center'}}>
             <img src='https://i.postimg.cc/gkH9S462/GO.jpg' width='700px'/>
             </div>
             </div>
      
   }

   return(
      <div>
         <h2> Carrito </h2>
         <div>
            {productos.map((producto)=>
            <div key={producto.id} style={{display: 'flex', border: '2px solid black', margin: '10px', padding:'10px', alignItems:'center', justifyContent:'space-between'}}>
               <div>
                  <img src={producto.img} width='100px'/>
               </div>
               <h4>Juego: {producto.name}</h4>
               <h4>$ {producto.price}</h4>
               <h4>Cantidad: {producto.cantidad}</h4>
               <button className='btn red' onClick={()=>borrarProducto(producto.id)}>Eliminar</button>
            </div>
            )}
            <h4>Total: ${calcularTotal()}</h4>
            <button className= 'btn green' onClick={()=>navegar('/form')}>Finalizar Compra</button>
            <button className='btn red' onClick={()=>clear()}>Vaciar Carrito</button>
         </div>
      </div>
      
      
   )
}

export default Cart