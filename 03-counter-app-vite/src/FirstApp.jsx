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
  const getUser = () => {
    return {
      id: 123,
      username: "SashaA",
    };
  };


  export const FirstApp = () => {
    return (
      <>
      <h1>First App, {getUser().username}.</h1>
      <p>App de ejemplo del curso.</p>
      </>
    )
  }
  
  
  