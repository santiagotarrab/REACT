import { Item } from "../Item/Item"
import "./itemList.css"
import getFetch from "../../helper/helper"
import {useState,useEffect} from 'react'
import React from "react"


export function ItemList () {

    const[data, setData]= useState([])
    const[loading, setLoading]=useState(true)

    useEffect(()=>{ 
        getFetch.then(data=>{
            setData(data)
            setLoading(false)})},[])



    return(<>

     <h1>ItemList</h1>    
     {loading? <h2>Cargando...</h2>:
    <div class="contenedor">
    <Item list={data} />
        </div>  }
        </>
    )


}