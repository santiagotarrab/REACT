import { Item } from "./Item";
import { ItemList } from "./itemList";
import { useState } from "react";


const datos = [
  { id: 1, title: "Lapiz", price: "10" , pictureUrl:"./img/lapiz.png"},
  { id: 2, title: "Lapiz", price: "12" , pictureUrl:"./img/lapiz.png"},
  { id: 3, title: "Lapiz", price: "15" , pictureUrl:"./img/lapiz.png"},
];


export function ItemListContainer({ theData }) {   
  return (
    <>
      <ItemList list={datos}></ItemList>
    </>
  );
}
