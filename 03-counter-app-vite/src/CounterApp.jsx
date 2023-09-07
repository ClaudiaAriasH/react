import PropTypes from "prop-types";

export const CounterApp = ({ title, value }) => {
  return (
    <>
      <h1>{title}.</h1>
      <h2>Value: {value} </h2>
    </>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  title: "Hola, Counter App",
  value: 1,
};
