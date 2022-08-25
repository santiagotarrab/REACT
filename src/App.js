import "./App.css";
import { NavBar } from "./components/navBar.js";
import { Boton } from "./components/Boton";
import { Contador } from "./components/Contador";
import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer";


const estilos = {
  backgroundColor: "blue",
};

function App() {
  const [stock, setStock] = useState(0);
  const sumar = () => setStock(stock + 1);
  const restar = () => setStock(stock - 1);

  const botones = <></>;

  return (
    <div className="App">
      <div className="">
        <NavBar />
        <ItemListContainer />

        <Contador stock={stock}>
          <button onClick={restar}>-</button>
          <button onClick={sumar}>+</button>{" "}
        </Contador>
      </div>
    </div>
  );
}

export default App;
