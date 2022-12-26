import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import './Cart.css'
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? 
            <div className="mx-auto emptyCart">
                <p>Tu carrito esta vacio</p>
                <p>Para seguir comprando <Link to={'/'} className="toHome btn-active">has click aqui</Link></p>
            </div> 
            : 
            <div className="container cart-container">
                {cart.map((producto,indice) =><div className="card cart-card my-3 mx-auto" key={indice}>
                <div className="row g-0 ">
                    <div className="col-md-3">
                        <img src={producto.img} className="img-fluid rounded-start img-cart" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body ps-0">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Cantidad: {producto.cant}</p>
                            <p className="card-text">Precio unitario: {producto.precio}</p>
                            <p className="card-text">Subtotal: {producto.precio * producto.cant}</p>
                        </div>
                    </div>
                    <div className="col-md-1 offset-md-2 my-auto">
                        <div><button className="btn btn-dark" onClick={() => removeItem(producto.id)}>❌</button></div>
                    </div>
                </div>
            </div>
            )}
            <div className="d-flex flex-column mt-5">
                <p className="mx-auto totalPrice">Total: {totalPrice()}</p>
                <div className="row justify-content-center">
                    <button className="btn btn-danger btn-vaciar-carrito " onClick={emptyCart}>Vaciar Carrito</button>
                    <Link to="/checkout" className="d-flex justify-content-center">
                        <button className="btn btn-primary px-5 m-2">Finalizar Compra</button>
                    </Link>
                </div>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;