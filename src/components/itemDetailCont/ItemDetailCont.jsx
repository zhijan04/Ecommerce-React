import { useState,useEffect } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailCont = () => {
    
    const [item, setItem] = useState (undefined);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number(id))
        .then((res) =>{
            setItem(res);
        })
    }, [])
    

    return (
        <div> {item && <ItemDetail item={item}/>}</div>
    )
}

export default ItemDetailCont