import { Item } from "./Item";
import { ItemList } from "./itemList";
import { useState } from "react";


const datos = [
  { id: 1, name: "Lapiz", email: "somewhere@gmail.com" },

  { id: 2, name: "Lapicera", email: "something@gmail.com" },

  { id: 3, name: "Marcador", email: "something@gmail.com" },
];

const datosCantidades = [...datos]
const datosCantidades2 ={...datosCantidades, cantidad:0}


console.log("ARRAY");
console.log(datosCantidades2)
//console.log(Array.from({length: 10}, () => 0))



export function ItemListContainer({ theData }) {
    console.log("A")
   
  return (
    <>
      <ItemList list={datos}></ItemList>
    </>
  );
}
