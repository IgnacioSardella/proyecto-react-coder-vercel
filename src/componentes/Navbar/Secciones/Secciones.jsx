import { Link } from "react-router-dom"

function Secciones() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/category/adultos">
                <button className='btn btn-section px-lg-4'>Adultos</button>
            </Link>
            <Link to="/category/niños">
                <button className='btn btn-section px-lg-4'>Niños</button>
            </Link>
            <Link to="/category/shorts">
                <button className='btn btn-section px-lg-4'>Shorts</button>
            </Link>
        </ul>
    )
}

export default Secciones