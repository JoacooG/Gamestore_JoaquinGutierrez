import React from "react";
import Logo from "../../imgs/logo.png";
import CartWidget from "./CartWidget";


const Navbar = () =>{
    return (
        <header>
            <nav>
                <div class="nav-wrapper black">
                    <div className="container">
                        <a href="#" class="brand-logo"><img style={styles.imagen} src={Logo} alt="" /></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="">Cat 1</a></li>
                            <li><a href="">Cat 2</a></li>
                            <li><a href="">Cat 3</a></li>
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
        width: '50%',
        margin: '5px',
    },
}


export default Navbar
