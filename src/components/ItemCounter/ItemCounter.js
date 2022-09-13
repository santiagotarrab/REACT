import { useState } from "react";
import "./ItemCounter.css";

export const ItemCounter= ({stock,initial,onAdd})=> {
  const [contador,setContador]=useState(initial)
const sumar = ()=>setContador(contador+1)
const restar = ()=> setContador(contador-1)

  return (
    <div className="contador">
      <button onClick={restar}>-</button>
      <button onClick={sumar}>+</button>
      <button onClick={(ev)=>{
        ev.preventDefault()
        onAdd(contador)}}>pasarValor</button>
      <div>{contador}</div>
    </div>
  );
}
