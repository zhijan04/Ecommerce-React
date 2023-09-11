import React, { useEffect, useState } from 'react';
import { PedirDatos } from '../helpers/pedirDatos';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [filtradoDeProductos, setfiltradoDeProductos] = useState([]);
    const { categoria } = useParams();
    const [tituloCat,settituloCat] = useState([]);

    useEffect(() => {
        PedirDatos()
            .then((res) => {
                setProductos(res);
            });
    }, []);

    useEffect(() => {
        if (categoria) {
            const filtrado = productos.filter((prod) => prod.categoria === categoria);
            setfiltradoDeProductos(filtrado);
            settituloCat(categoria);
        } else {
            setfiltradoDeProductos(productos);
            settituloCat("Productos")
        }
    }, [categoria, productos]);

    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList productos={filtradoDeProductos} titulo ={tituloCat}/>
        </div>
    );
};

export default ItemListContainer;
