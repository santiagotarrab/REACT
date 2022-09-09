import { Item } from "../Item/Item";
import "./itemList.css";
import getFetch from "../../helper/helper";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

export function ItemList(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch.then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>ItemList</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div class="contenedor">
          {props.lista.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
            <Item item={item} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
