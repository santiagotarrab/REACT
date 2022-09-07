import { Children } from "react";
import "./Contador.css";

export function Contador(props) {
  return (
    <div className="contador">
      {props.stock}
      {props.children}
    </div>
  );
}
