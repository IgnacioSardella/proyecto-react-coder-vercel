import './itemCount.css'
import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    

    return (
        <div className='d-flex align-items-center flex-column'>
            <div className='d-flex align-items-center contador1'>
                <button onClick={restar} className='btn btn-light btn-primary my-2'>-</button>
                <span className="span-contador">{contador}</span>
                <button onClick={sumar} className='btn btn-light btn-primary my-2'>+</button>
            </div>
            <button onClick={agregarAlCarrito} className='btn btn-dark'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount