import React from "react";
import Logo from "../../imgs/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";



const Navbar = () =>{
    return (
        <header>
            <nav>
                <div class="nav-wrapper black">
                    <div className="container">
                        <Link to='/'><img style={styles.imagen} src={Logo} alt="" /></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><Link to='/productos/:categorias'>FPS</Link></li>
                            <li><Link to='/productos'>RPG</Link></li>
                            <li><Link to='/productos'>Accion</Link></li>
                            <li><Link to='/productos'>Todos los Juegos</Link></li>
                            <CartWidget />
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
