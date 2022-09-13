import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export const CartContainer = () => {
  const { productCartList, deleteProduct } = useContext(CartContext);

  return (
    <>
      <div>CartContainer</div>


      {productCartList.map((item) => (<div>  
        <h2>{`${item.name}  ${item.cantidad}`}</h2>
        <button onClick={()=>deleteProduct(item.id)}>BORRAR</button>
        </div>))}
    </>
  );
};
