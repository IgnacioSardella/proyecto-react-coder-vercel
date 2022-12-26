import { useState, createContext } from "react";

const CartContext = createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        
        if (isInCart(producto.id)) {
            const index = cart.findIndex(prod => prod.id === producto.id);
            const aux = [...cart]
            aux[index].cant = cantidad;
            setCart(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            setCart([...cart, nuevoProducto])
        }
    }

    const emptyCart = () =>{
        return setCart([])
    }

    const removeItem = (id) =>{
        return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQty = () =>{
        return cart.reduce((acc, prod) => acc += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.cant * prod.precio), 0)
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, emptyCart, removeItem, getItemQty, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}