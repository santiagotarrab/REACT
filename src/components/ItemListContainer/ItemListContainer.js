import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/itemList";
import { useState } from "react";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { productos } from "../../helper/helper"
import { useEffect } from "react";


export function ItemListContainer({ theData }) {  

  // const [productos,setProductos]= useState()
  const [articulosFiltrados,setArticulosFiltrados]=useState([productos])
  const {tipoPelicula}=useParams()

  
  
useEffect(()=>{

  if(!tipoPelicula){
    setArticulosFiltrados( productos)
}else{
  setArticulosFiltrados( productos.filter(el=> el.category===tipoPelicula))
}

},[tipoPelicula])
  
  return (
    <>

        <ItemList lista={articulosFiltrados}/>  
    </>
  );
}
