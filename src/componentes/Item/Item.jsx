import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (
        <div className="card cardProducto col-8 col-md-4 col-lg-3 m-3">
            <div className="img-producto d-flex justify-content-center p-3">
                <img src={`${prod.img}`} className="card-img-top pt-3" alt="..."/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title"> {prod.nombre} </h5>
                <p className="card-text"> Precio: $ {prod.precio} </p>
                <button className="btn btn-dark w-100"><Link className="nav-link" to={`/product/${prod.id}`}>Ver detalles</Link></button>
            </div>
        </div>
    )
}

export default Item