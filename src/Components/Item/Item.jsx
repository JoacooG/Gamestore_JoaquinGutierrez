import React from "react";
import { useNavigate } from "react-router-dom";


const Item = ({productos}) => {
    const navegar = useNavigate();

    return (
        <div class="row">
            <div class="card medium">
                <div class="card-image">
                    <img src={productos.img} alt="producto"/>
                </div>
                <div class="card-content">
                    <span class="card-title">{productos.name}</span>
                    <p>ARS ${productos.price}</p>
                </div>
                <div class="card-action">
                <button className='btn green' onClick={()=>navegar(`/detalle/${productos.id}`)}>Mas Informacion</button>
                </div>
            </div>
        </div>
    )
}

export default Item