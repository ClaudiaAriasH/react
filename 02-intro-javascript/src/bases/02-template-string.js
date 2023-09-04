// template string


const nombre = "Sasha";

const apellido = "Arias";
const nombreCompleto = nombre + ' ' + apellido;

console.log( nombreCompleto );


const nombreCompletoTemplateString = `${ nombre } ${ apellido } `;

function getSaludo(nombreAct) {
    return 'Hola' + ' ' + nombreAct;
}

console.log( `Esto es un texto: ${getSaludo(nombreCompleto)} `);