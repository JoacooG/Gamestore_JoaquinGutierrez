import React from "react";
import Navbar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) =>{
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<ItemListContainer greetings='Bienvenidos'/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categorias' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
 
    
  )
}

export default App