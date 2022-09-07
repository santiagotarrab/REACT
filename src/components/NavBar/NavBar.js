
import "./NavBar.css"
import {Carrito} from "../Carrito/Carrito"

const contador = 0;

const msgAlert = (e) => {
  e.preventDefault();
  console.log(e);
  contador++;
};

const linkHome = (
  <li>
    <a href="/" onClick={msgAlert}>
      {" "}
      HOME
    </a>
  </li>
);

const linkGaleria = (
  <li>
    <a href="/"> GALERIA</a>
  </li>
);

const linkNosotros = (
  <li>
    <a href="/"> NOSOTROS</a>
  </li>
);

export function NavBar() {
  return (
    <div id="navBar">
      <ul>
        <li> {linkHome}</li>
        <li>{linkGaleria}</li>
        <li>{linkNosotros}</li>
        <Carrito />
      </ul>
      <div></div>
    </div>
  );
}

export default contador;
