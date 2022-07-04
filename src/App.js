import React from "react";
import Navbar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";

const App = (props) =>{
  return (
    <div>
    <Navbar />
    <ItemListContainer  greetings='Bienvenidos'/>
    <ItemDetailContainer />
    </div>
 
    
  )
}

export default App