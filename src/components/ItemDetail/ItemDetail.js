import getFetch from "../../helper/helper"
import {useState, useEffect} from 'react'
export function ItemDetail (){

    const [data, setData]=useState({})
    const [loading, setLoading] = useState(true)
    const [itemSelecc, setItemSelecc]= useState(1)

    
    useEffect(()=>{
        getFetch.then((data)=>{
        setData(data.find(prod=> prod.id===1))
        setLoading(false)})

    },[])
    console.log('itemdetail', data)
    return(

        <>{loading? <h2>Cargando...</h2>: 
       `${data.name}
        ${data.price}`}
        
        </>
    )
}