import { createContext } from "react";
import { productos } from "../helper/helper";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    
    const [productCartList,setProductCartList]=useState([])
    
    const addProduct= (product)=>{
    const newList = [...productCartList, product]
     setProductCartList(newList)   
    }
    
    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList]
        const newArray = copyArray.filter(el =>el.id !== idProduct)
        setProductCartList(newArray)
    }

    return(
    <CartContext.Provider value={{productCartList, addProduct, deleteProduct}}>
     {children}   
    </CartContext.Provider>   
    )
}