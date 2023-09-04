//Promesas https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import { getHeroeById } from "./bases/09-export-import";

/*const promesas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    console.log("Heroe: ", heroe);
    resolve(heroe);
    //reject("No se pudo encontrar el heroe");
  }, 2000);
});

promesas
  .then((heroe) => {
    console.log("2 segundos despúes", heroe);
  })
  .catch((err) => console.log(err));*/

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then((heroe) => {
    console.log("2 segundos despúes, Heroe", heroe);
  })
  .catch((err) => console.log(err));
