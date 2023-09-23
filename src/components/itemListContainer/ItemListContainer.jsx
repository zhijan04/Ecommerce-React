import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [filtradoDeProductos, setfiltradoDeProductos] = useState([]);
    const { categoria } = useParams();
    const [tituloCat,settituloCat] = useState([]);

    useEffect(() => {
const productosRef = collection(db, "productos");

getDocs(productosRef)
.then((resp) => {
    setProductos(
        resp.docs.map((doc)=>{
            return {...doc.data(), id: doc.id }
        })
    );
})

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
