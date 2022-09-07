import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { Boton } from "./components/Boton/Boton";
import { Contador } from "./components/Contador/Contador";
import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

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
        <ItemDetailContainer />




        {/* <Contador stock={stock}>
          <button onClick={restar}>-</button>
          <button onClick={sumar}>+</button>{" "}
        </Contador> */}
      </div>
    </div>
  );
}

export default App;
