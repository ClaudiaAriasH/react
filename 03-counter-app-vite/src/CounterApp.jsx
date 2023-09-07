import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ title, value }) => {


const [ counter, setCounter ] = useState( value );


const handleAdd = () => {
  //setCounter( counter + 1 );
  setCounter((c) => c + 1);
};

const handleSubtract = () => {
  setCounter((c) => c - 1);
};

const handleReset = () => setCounter(value);


  return (
    <>
      <h1> { title } </h1>
      <h2> Value: { counter } </h2>
      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleSubtract }>
        -1
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  title: "Hola, Counter App.",
  value: 1,
};


// Link eventos soportados por react https://es.legacy.reactjs.org/docs/events.html
