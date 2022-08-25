import { Item } from "./Item"
import "./itemList.css"

export function ItemList (props) {
    console.log("HOLA");
    console.log(props.list);
    return(
    <>
    <Item list={props.list} />
        
        </>  

    )


}