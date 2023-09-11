import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ( {item} ) => {
    return (
        <div className="container">
            <div className="product-detail">
                <img className="image" src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="tituloDetail">{item.titulo}</h3>
                    <br />
                    <p className="descripcion">Descripción: {item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio"> Precio: ${item.precio}</p>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada' ,quantity, item.titulo)}/>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail