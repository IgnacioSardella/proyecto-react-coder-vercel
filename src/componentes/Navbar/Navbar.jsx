import "./navbar.css"
import { Link } from "react-router-dom";
import Secciones from "./Secciones/Secciones";
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <button className="navbar-brand btn px-lg-5 logo">Tu Deporte</button>
                </Link>
                <div className="d-flex ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <CartWidget display={"d-flex d-lg-none me-3"} clases={"cart-widget btn px-4 mb-2 ms-1"}/>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Secciones/>
                </div>
                <CartWidget display={"d-none d-lg-flex me-5"} clases={"cart-widget btn px-4 mb-2 ms-1"}/>
            </div>
        </nav>
    );
}

export default Navbar;
