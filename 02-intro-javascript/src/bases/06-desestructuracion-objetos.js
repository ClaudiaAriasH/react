//Desestructuración https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const personaje = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "new york",
    zipCode: 345666,
    lat: 34.4577,
    lng: 45.87654,
  },
};

console.log(personaje.nombre);

console.log(personaje.apellido);

const { nombre, edad, apellido } = personaje;

const { nombre: nombre2 } = personaje;

console.log(nombre, apellido, edad);
console.log(nombre2);

const retornaPersonaje = (personaje) => {
  const { nombre, edad, apellido } = personaje;

  console.log(nombre, apellido, edad);
};

retornaPersonaje(personaje);

//Desestructurada

const retornaPersonaje2 = ({ nombre, apellido }) => {
  console.log(nombre, apellido);
};

retornaPersonaje2(personaje);

const retornaPersonaje3 = ({ nombre, apellido, edad, rango= 'Capitan' }) => {
  return {
    nombreCompleto: `${nombre} ${apellido}`,
    anios: edad,
    rango: rango

  }
};

const avengers = retornaPersonaje3(personaje);

console.log(avengers);



const userContext = ({ nombre, apellido, edad, rango= 'Capitan' }) => {
  return {
    nombreCompleto: `${nombre} ${apellido}`,
    anios: edad,
    rango: rango,
    latlgn: {
      lat: 13.4566,
      lgn: 12.455
    }

  }
};

const avengersContext = userContext(personaje);

const { nombreCompleto, latlgn: {lat, lgn} } = avengersContext;


console.log(nombreCompleto, lat, lgn);