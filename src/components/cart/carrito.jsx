import React, { useContext } from 'react'
import { CartContext } from '../../contexto/CartContext'
import { Link } from 'react-router-dom';


const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }


  return (
    <div className='carritoContainer'>
      <h1 className='titleCart'>carrito</h1>
      {
        carrito.map((prod) => (
          <div className='Obj' key={prod.id}>
            <br /><br />
            <img className='imagenCart'src={prod.imagen} alt="sda" />
            <h3>{prod.titulo}</h3>
            <p>Precio por unidad: ${prod.precio}</p>
            <p>Precio Total: ${prod.precio * prod.cantidad}</p>
            <p>cantidad: {prod.cantidad}</p>
            <br />
          </div>
        ))

      }
      { carrito.length >0 ?
    <>
        <h2 className='TotalPrice'>Precio Total: ${precioTotal()}</h2>
        <button className='vaciarCart' onClick={handleVaciar}>Vaciar Carrito</button>
        <Link className='checkout' to="/checkout"> finalizar compra</Link>
    </> :
    <h2>el carrito esta vacio</h2>
}

    </div>
  )
}

export default Carrito