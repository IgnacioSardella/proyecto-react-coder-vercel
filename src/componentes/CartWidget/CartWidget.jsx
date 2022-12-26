import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({display, clases}) => {
    const {getItemQty} = useContext(CartContext)

    return (
        <div className={display}>
            <Link className="nav-link w-75" to="/cart">
                <button className={clases}>🛒</button>
            </Link>
            <li className="nav-item d-block">
                <p className="my-4">{getItemQty()}</p>
            </li>        
        </div>
    );
}

export default CartWidget;
