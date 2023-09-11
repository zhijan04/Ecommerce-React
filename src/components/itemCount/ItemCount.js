import { useState } from "react";

const ItemCount = ( {stock, initial, onAdd} ) => {
const [quantity, setQuantity] = useState(initial)

const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity+1)
        }
    }

const decrement = () => {
    if (quantity < stock) {
        setQuantity(quantity-1)
        }
    }

return(
    <div className="counter">
        <div className="counter-controls">
            <button className="button-Count" onClick={decrement}>-</button>
            <h4 className="numberCount">{quantity}</h4>
            <button className="button-Count" onClick={increment}>+</button>
        </div>
        <div>
            <button className="button-cart" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>

    </div>
)
}
export default ItemCount