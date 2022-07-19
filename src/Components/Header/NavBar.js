import React from "react";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import CartWidget from "../Header/CartWidget";



const Navbar = () =>{
    return (
        <header>
            <nav>
                <div class="nav-wrapper black">
                    <div className="container">
                        <Link to='/'><img style={styles.imagen} src={Logo} alt="" /></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'-10px'}}>
                            <li><Link to='/productos/FPS'>FPS</Link></li>
                            <li><Link to='/productos/RPG'>RPG</Link></li>
                            <li><Link to='/productos/Accion'>Accion</Link></li>
                            <li><Link to='/productos'>Todos los Juegos</Link></li>
                            <li><Link to='/cart'><CartWidget /></Link></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

const styles = {
    imagen: {
        width: '15%',
        margin: '5px',
    },
}


export default Navbar
