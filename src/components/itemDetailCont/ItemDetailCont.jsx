import { useState,useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailCont = () => {
    
    const [item, setItem] = useState (undefined);
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)

        .then((resp) =>{
            setItem(
                {...resp.data(), id: resp.id}
            );
        })
    }, [id])
    

    return (
        <div> {item && <ItemDetail item={item}/>}</div>
    )
}

export default ItemDetailCont