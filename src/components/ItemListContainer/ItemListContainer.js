import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/itemList";
import { useState } from "react";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import {productos} from "../../helper/helper"

const articulos = [
  { id: 1, title: "pantalon corto", price: "10" , pictureUrl:'../img/lapiz.png', category:'libreria'},
  { id: 2, title: "Marcador", price: "12" , pictureUrl:"../img/marcador.png", category:'libreria'},
  { id: 3, title: "Resaltador", price: "15" , pictureUrl:"../img/resaltador.png", category:'libreria'},
];


export function ItemListContainer({ theData }) {   
  const {tipoPelicula}=useParams()

  console.log(tipoPelicula)
  const vaar = productos.filter(el=> el.category===tipoPelicula)
  console.log(vaar)
  //  const filtrado= productos.filter((el) => el.category==='nacionales')


  
  return (
    <>

        <ItemList />  
    </>
  );
}
