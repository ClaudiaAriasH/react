//Desestructuración arreglos

const personajes = ['Ironman', 'Thor', 'Hulk'];

console.log(personajes[0]);

const [p1] = personajes;

console.log(p1);

const [, , p3] = personajes;

console.log(p3);

const retornaPersonaje = () => {
  return ['Thor', 2];
};

const [nombre, numero] = retornaPersonaje();

console.log(nombre, numero);

//Tarea

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola,mundo');
    },
  ];
};

const [valor, setNombre] = useState('Thor');
console.log(valor);
setNombre();
