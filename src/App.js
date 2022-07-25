import React from "react";
import Navbar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import Form from "./Components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartCustomProvider from './Context/CartContext'


const App = (props) =>{
  return (
    <BrowserRouter>
    <CartCustomProvider>
    <Navbar />
    <Routes>
        <Route path='/' element={<ItemListContainer greetings='Bienvenidos'/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categorias' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/form' element={<Form />}/>
    </Routes>
    </CartCustomProvider>
    </BrowserRouter>
 
    
  )
}

export default App