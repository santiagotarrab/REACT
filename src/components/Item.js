import { Children } from "react";
import { Contador } from "./Contador";
import "./Item.css"


export function Item(props) {
  console.log(props.list);

  return (
    <>
      {props.list.map((el) => (
        <div>
          {el.name}
          <Contador >
            <button >-</button>
            <button >+</button>{" "}
          </Contador>
        </div>
      ))}
    </>
  );
}
