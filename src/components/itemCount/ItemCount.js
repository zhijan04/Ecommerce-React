
const ItemCount =({cantidad, handleRestar, handleSumar, handleAgregar}) =>{

return(
    <div className="counter">
        <div className="counter-controls">
            <button className="button-Count" onClick={handleRestar}>-</button>
            <h4 className="numberCount">{cantidad}</h4>
            <button className="button-Count" onClick={handleSumar}>+</button>
        </div>
        <div>
            <button className="button-cart" onClick={handleAgregar}>Agregar al carrito</button>
        </div>

    </div>
)
}
export default ItemCount