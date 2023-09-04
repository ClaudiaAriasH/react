//Funciones Js

// no usar este tipo de funciones
/*function saludar(nombre) {

    return `Hola, ${nombre}`;
}*/

// usar
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// funciones de flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// cuando solo tiene un return
const saludar3 = (nombre) => `Hola, ${nombre}`;

const getUser = () => {
  return {
    id: 123,
    username: "SashaA",
  };
};

const getUser2 = () => ({
  id: 123,
  username: "SashaA",
});

console.log(saludar("Sasha"));

console.log(saludar2("Sasha"));

console.log(saludar3("Sasha"));

console.log(getUser());
console.log(getUser2());


// Tarea

function getUserActivo( nombre ) {
    return {
        id: 123,
        username: nombre
    }
};


const userActivo =getUserActivo('SashaT');
console.log(userActivo)



// con return de un objeto implicito 
const getUserActivo2 = ( nombre ) => (
     {
        id: 123,
        username: nombre
    }
);


const userActivo2 =getUserActivo('SashaT');
console.log(userActivo2)