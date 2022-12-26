import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProductos } from '../../assets/firebase.js';
import './itemListContainer.css'

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        if(category) {
            getProductos()
            .then(products => {
                const productsList = products.filter(prod => prod.idCategory === category)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos()
            .then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
    
    return (
        <div className='container-fluid mt-5'>
            <div className="row shop-items justify-content-evenly offset-md-2 w-md-75 ">
                {productos}
            </div>
        </div>
    )
}

export default ItemListContainer