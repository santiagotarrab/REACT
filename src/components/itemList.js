import { Item } from "./Item"
import "./itemList.css"

export function ItemList (props) {
  
    return(
    <>
    <Item list={props.list} />
        </>  

    )


}