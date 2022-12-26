import Item from "../Item/Item"

const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(prod => <Item key={prod.id} prod = {prod}/>)}
        </>
    )
}

export default ItemList