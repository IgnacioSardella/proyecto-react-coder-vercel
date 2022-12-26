import React from "react"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({producto}) => {
    
    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }

    return (
        <div className="row g-0 p-2 col-12">
            <div className="col-md-6 pt-2">
                <img src={producto.img} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h4 className="card-title">{producto.nombre}</h4>
                    <p className="card-text">{producto.tipo}</p>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Stock: {producto.stock}</p>
                    <ItemCount stock={producto.stock} onAdd={onAdd}/>
                    <button className="btn btn-danger w-100 mt-5"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail