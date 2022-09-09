
import { ItemDetail } from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom" 

export function ItemDetailContainer(){
  const {id} = useParams()
  

    return(
    <ItemDetail id={id}/>
  )  
}