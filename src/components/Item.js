import { Children } from "react";
import { Contador } from "./Contador";
import "./Item.css"


export function Item(props) {
  console.log(props.list);
  
  return (
    <>
      {props.list.map((el) => (
        
        <div>
          <div>{el.title}</div>
          <div>{el.price}</div>
          <div> {el.title} </div>
        
         
          <Contador >
            <button >-</button>
            <button >+</button>{" "}
          </Contador>
        </div>
      ))}
    </>
  );
}
