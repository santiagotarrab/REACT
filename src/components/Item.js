import { Children } from "react";
import { Contador } from "./Contador";
import "./Item.css"


export function Item(props) {
  const ia = "./img/lapiz.png"
  console.log(props.list);
  console.log(props.list[0].pictureUrl)
  return (
    <>
      {props.list.map((el) =>  (
        
        <div>
          <div>{el.title}</div>
          <div>{el.price}</div>
          <img src={require(`${el.pictureUrl}`)} alt="" />
        
         
          <Contador >
            <button >-</button>
            <button >+</button>{" "}
          </Contador>
        </div>
      )
      )}
    </>
  );
}
