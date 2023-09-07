import PropTypes from "prop-types";

export const CounterApp = ({ title, value }) => {


const handleAdd = (event, newValue)  => { 
    console.log(event) 
};


  return (
    <>
      <h1> { title } </h1>
      <h2> Value: { value } </h2>
      <button onClick={ (event) => handleAdd(event, value)  }>
        +1
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