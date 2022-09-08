
import "./NavBar.css"
import {Carrito} from "../Carrito/Carrito"
import { Link } from "react-router-dom";

const contador = 0;

const msgAlert = (e) => {
  e.preventDefault();
  console.log(e);
  contador++;
};


export function NavBar() {
  return (
    <div id="navBar">
      <ul>
        <li><Link to='/'>INICIO</Link></li>
        <li><Link to='/contacto'>CONTACTO</Link></li>
        <li><Link to='/nosotros'>NOSOTROS</Link></li>
        <li><Link to='/productos/nacional'>NACIONALES</Link></li>
        <li><Link to='/productos/internacional'>INTERNACIONALES</Link></li>
        <Carrito />
      </ul>
      <div></div>
    </div>
  );
}

export default contador;
