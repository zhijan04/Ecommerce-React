import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexto/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) =>{
            setPedidoId(doc.id);
            vaciarCarrito();
        })

    }
    if(pedidoId){
        return(
            <div className="contenedorPedido">
                <h1 className='tituloPedido'> ¡Muchas Gracias por tu compra!</h1>
                <p>tu Orden de compra es: {pedidoId}</p>
            </div>
        )
    }

    return (
    <div className="container-checkout">
        <h1 className="main-title-checkout">Finalizar compra</h1>
        <form className="formulario-checkout" onSubmit={handleSubmit(comprar)}>

            <input className='formularioCheckout' type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input className='formularioCheckout' type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input className='formularioCheckout' type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviarcheckout" type="submit">Comprar</button>

        </form>
    </div>
    )
}

export default Checkout