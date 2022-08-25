import { Item } from "./Item";
import { ItemList } from "./itemList";
import { useState } from "react";


const datos = [
  { id: 1, title: "Lapiz", price: "10" , pictureUrl:"./img/lapiz.png"},
  { id: 2, title: "Marcador", price: "12" , pictureUrl:"./img/marcador.png"},
  { id: 3, title: "Resaltador", price: "15" , pictureUrl:"./img/resaltador.png"},
];


export function ItemListContainer({ theData }) {   
  return (
    <>
      <ItemList list={datos}></ItemList>
    </>
  );
}
