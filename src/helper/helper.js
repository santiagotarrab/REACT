import luna from "../img/lunaDeAvellaneda.jpg";
import papeles from "../img/papelesEnElViento.jpg";


export const productos = [
  { id: 1, name: "el secreto de sus ojos", price: 100, img:"elSecretoDeSusOjos.jpg", category:'nacional' },

  { id: 2, name: "papeles en el viento", price: 200, img:"papelesEnElViento.jpg", category:'nacional' },

  { id: 3, name: "luna de avellaneda", price: 300, img: "lunaDeAvellaneda.jpg", category:'nacional' },

  { id: 4, name: "batman", price: 300, img:"elSecretoDeSusOjos.jpg", category:'internacional' },
  { id: 5, name: "joker", price: 300, img:"elSecretoDeSusOjos.jpg", category:'internacional' },

];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
    reject((err) => console.log(err));
  }, 3000);
});

export default getFetch;

