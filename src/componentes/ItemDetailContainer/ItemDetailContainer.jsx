import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducto } from "../../assets/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="container card mb-3 item-detail col-9 col-lg-7">
                    <ItemDetail producto={producto}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer