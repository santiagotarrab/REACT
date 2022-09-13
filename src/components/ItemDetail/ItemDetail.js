import getFetch from "../../helper/helper"
import {useState, useEffect} from 'react'
import { productos } from "../../helper/helper"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"



export const ItemDetail = ({id, pasarValor})=>{
    const {addProduct} = useContext(CartContext)
    const [contador,setContador]=useState(0)
    
    
    const sumar = ()=>{setContador(contador+1)}
    const restar = ()=>{
        if(contador>=1){setContador(contador-1)}}


    const onAdd=(count)=>{
        const newProduct= {...productos.find(item=>item.id==id), cantidad:count}
        addProduct(newProduct)
       
        

    }   

    return(

        <>
       <h1>{productos.find((prod)=>prod.id==id).name}</h1>
       <div>
        
        <img src={`../img/${productos.find((prod)=>prod.id==id).img}`} alt="" />
       </div>
        <ItemCounter initial={0} stock={10} onAdd={onAdd} />


 
        <div>{contador}</div>
        </>
    )
}