import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className='product'>
            <img className="imagenP" src={producto.imagen} alt='imagenProducto'/>
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>categoria: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item