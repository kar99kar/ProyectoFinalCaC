import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//AQUI EN EL INDEX RENDERIZAMOS APP

//React.StrictMode cuando encerramos un componente dentro de strectmode le estamos indicando que van a tener las reglas estrictas de react
//me tira advertencias en consolapara tener buenas practicas con react
//App adentro tiene Peliculas Grid, PeliculasGrid adentro tiene un map
//npm install react-router-dom me permite capturar un id que esta viajando por la url y guardarlo en una variable
// para que pueda capturar el id de la pelicula y pedir la info de una pelicula en particular 
