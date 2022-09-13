import { Children } from "react";
import { Link } from "react-router-dom";

import "./Item.css";

export const Item = ({item})=>  {
console.log(item.img)
  return (
    <>
  
        <div class="container-item">
          <div>{item.name}</div>
          <div>{item.price}</div>
          <img src={require(`../../img/${item.img}`)} alt="" />  



        </div>
    
    </>
  );
}
