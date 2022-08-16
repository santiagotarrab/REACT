import "./App.css";
import { NavBar } from "./components/navBar.js";
import { Boton } from "./components/Boton";
import { Contador } from "./components/Contador";
import {useState} from 'react';


const estilos = {
  backgroundColor: "blue",
};


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarClic = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className="">
        <NavBar />

      </div>
    </div>
  );
}

export default App;
