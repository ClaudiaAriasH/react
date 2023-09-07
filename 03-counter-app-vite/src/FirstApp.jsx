/*import React, { Fragment } from 'react'
  
  export const FirstApp = () => {
    return (
      <Fragment>
      <h1>First App.</h1>
      <p>Prueba retornar elementos en el componente.</p>
      </Fragment>
    )
  }
  */

//Usando el sinonimo de un fragmento

//JSON.stringify imprime objetos

//solo se permite hacer esto con funciones sincronas, no funciona con async

import PropTypes from 'prop-types';



export const FirstApp = ({ title, subtitle, name }) => {


  if ( !title ) {
    throw new Error('El title no existe.');
  }

  return (
    <>
      <h1>{title}.</h1>
      <p>App de ejemplo del curso. {subtitle} de {name} </p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number

};

FirstApp.defaultProps = {
  title: 'Hola, First App',
  subtitle: 1,
  name: 'Sasha'

};