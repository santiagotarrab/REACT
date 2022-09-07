import { Children } from "react";
import { Contador } from "../Contador/Contador";
import "./Item.css";

export function Item(props) {

  console.log("lista",props.list);

  return (
    <>
      {props.list.map((el) => (
        <div class="container-item">
          <div>{el.name}</div>
          <div>{el.price}</div>
           <img src={el.img} alt="" />  

          <Contador>
            <button>-</button>
            <button>+</button>{" "}
          </Contador>

        </div>
      ))}
    </>
  );
}
