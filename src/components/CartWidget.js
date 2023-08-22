import React from 'react'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCartShopping} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return (
    <div className= "image"> 
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        
    </div>
    )
}

export default CartWidget