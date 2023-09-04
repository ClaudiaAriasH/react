// Arreglos en JS


// Fijo o valor predeterminado
//const arreglo = new Array();

//En los demas casos
const arreglo = [1,2,3,4];
//arreglo.push(1);  no utilizar por que modifica el objeto principal


let arreglo2 = [arreglo, 5];

let  arreglo3 = [...arreglo, 5];

const  arreglo4 = arreglo3.map(function(numero) {
return numero*2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);