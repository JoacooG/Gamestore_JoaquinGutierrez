import React from "react";
import Navbar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

const App = (props) =>{
  return (
    <div>
    <Navbar />
    <ItemListContainer  greetings='Bienvenidos'/>
    </div>
 
    
  )
}

export default App