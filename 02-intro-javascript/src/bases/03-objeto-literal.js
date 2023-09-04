// objetos literales

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

console.log({ personaje });
console.table({ personaje });

// Prohibido
// x const personaje2 = personaje;

// Correcto
const personaje2 = { ...personaje };
personaje2.nombre = "Peter";
personaje2.apellido = "Parker";


console.log(personaje);
console.log(personaje2);
