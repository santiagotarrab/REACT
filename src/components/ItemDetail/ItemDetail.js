import getFetch from "../../helper/helper"
import {useState, useEffect} from 'react'
import { productos } from "../../helper/helper"
export const ItemDetail = ({id, pasarValor})=>{

    const [contador,setContador]=useState(0)
    const sumar = ()=>{setContador(contador+1)}
    const restar = ()=>{
        if(contador>=1){setContador(contador-1)}}


    const funcion=(ev)=>{
        ev.preventDefault()
        pasarValor(contador)        
        

    }   

    return(


        <>
       <h1>{productos.filter((prod)=>prod.id==id)[0].name}</h1>
       <div>
        
        <img src={`../img/${productos.filter((prod)=>prod.id==id)[0].img}`} alt="" />
       </div>
       <button onClick={restar}>-</button> 
       <button onClick={sumar}>+</button> 
       <button onClick={funcion}>PASAR VALOR</button> 
 
        <div>{contador}</div>
        </>
    )
}