import "./navBar.css";

const msgAlert = (e) => {
    e.preventDefault();
    console.log(e.target);
}
const linkHome = (
  <li >
    <a href="/" onClick={msgAlert}> HOME</a>
  </li>
);

const linkGaleria = (
  <li> 
    <a href="/"> GALERIA</a>
  </li>
)


const linkNosotros = (
  <li>
    <a href="/"> NOSOTROS</a>
  </li>
);

export function NavBar() {
  return (
    <div id="navBar">
      <ul>
        {linkHome}
        {linkGaleria}
        {linkNosotros}
      </ul>
    </div>
  );
}
