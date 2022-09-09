
import { ItemDetail } from "../ItemDetail/ItemDetail" 
import { useParams } from "react-router-dom" 

export function ItemDetailContainer(){
  const {id} = useParams()
   
  const pasarValor = (contador)=> {
    alert(contador)}

    return(
    <ItemDetail id={id} pasarValor={pasarValor}/>
    
  )  
}