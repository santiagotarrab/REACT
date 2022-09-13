import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { Boton } from "./components/Boton/Boton";
import { useState } from "react";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "./pages/contacto";
import { Nosotros } from "./pages/nosotros";
import { NoExiste } from "./pages/noexiste";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartContext, CartProvider } from "./Context/CartContext";


const estilos = {
  backgroundColor: "blue",
};

function App() {
  const [stock, setStock] = useState(0);
  const sumar = () => setStock(stock + 1);
  const restar = () => setStock(stock - 1);

  const botones = <></>;

  return (<>

    <BrowserRouter>
    <CartProvider>
      <div className="App">
        <div className="">

          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/productos/:tipoPelicula' element={ <ItemListContainer />} />
            <Route path='*' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer /> } />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
        </div>
      </div>
      </CartProvider>
    </BrowserRouter>

    </>
  );
}

export default App;
