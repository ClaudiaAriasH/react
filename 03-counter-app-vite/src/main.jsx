import React from "react";
import ReactDOM from "react-dom/client";
//import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp  title="Counter App." value={ 1 }/>
   { /*<FirstApp  title="First App." subtitle="Hola" name={'Sasha'}/>*/}
  </React.StrictMode>
);
