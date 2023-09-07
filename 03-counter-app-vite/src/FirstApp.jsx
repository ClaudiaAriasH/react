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

const getUser = () => {
  return {
    id: 123,
    username: "SashaA",
  };
};

export const FirstApp = ({ title, subtitle }) => {


  if ( !title ) {
    throw new Error('El title no existe.');
  }

  return (
    <>
      <h1>{title}.</h1>
      <p>App de ejemplo del curso. {subtitle} </p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number

};