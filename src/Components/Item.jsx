import React from "react";


const Item = ({productos}) => {
    return (
        <div class="row">
            <div class="card medium">
                <div class="card-image">
                    <img src={productos.img}/>
                </div>
                <div class="card-content">
                    <span class="card-title">{productos.name}</span>
                    <p>ARS ${productos.price}</p>
                </div>
                <div class="card-action">
                <a href="#">Mas Informacion</a>
                </div>
            </div>
        </div>
    )
}

export default Item