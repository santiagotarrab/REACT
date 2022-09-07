import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/itemList";
import { useState } from "react";
import "./ItemListContainer.css"



const articulos = [
  { id: 1, title: "Lapiz", price: "10" , pictureUrl:'../img/lapiz.png'},
  { id: 2, title: "Marcador", price: "12" , pictureUrl:"../img/marcador.png"},
  { id: 3, title: "Resaltador", price: "15" , pictureUrl:"../img/resaltador.png"},
];


export function ItemListContainer({ theData }) {   
  
  console.log(articulos)

  return (
    <>

        <ItemList />  
    </>
  );
}
