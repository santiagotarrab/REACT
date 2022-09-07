import luna from "../img/lunaDeAvellaneda.jpg";
import papeles from "../img/papelesEnElViento.jpg";
import secreto from "../img/elSecretoDeSusOjos.jpg";

const productos = [
  { id: 1, name: "el secreto de sus ojos", price: 100, img: { secreto } },

  { id: 2, name: "papeles en el viento", price: 200, img: { papeles } },

  { id: 3, name: "luna de avellaneda", price: 300, img: { luna } },
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
    reject((err) => console.log(err));
  }, 3000);
});

export default getFetch;
