import { useContext, useState } from "react"
import ItemCount from "../itemCount/ItemCount"
import { CartContext } from "../../contexto/CartContext"


const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);
    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }



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
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarAlCarrito(item, cantidad)}} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail