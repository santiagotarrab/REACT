import getFetch from "../../helper/helper"
import {useState, useEffect} from 'react'
import { productos } from "../../helper/helper"
export const ItemDetail = ({id})=>{


    console.log()
    return(

        <>
       <h1>{productos.filter((prod)=>prod.id==id)[0].name}</h1>
        
        </>
    )
}