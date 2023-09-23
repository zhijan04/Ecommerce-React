import React, { useContext } from 'react'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexto/CartContext'


const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);
    return (
    <div className= "image"> 
        <Link className='menu-link' to="/carrito"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
        <span className='numeroCart'>{cantidadEnCarrito()}</span>
    </div>
    )
}

export default CartWidget