//contiene la formacion de cada card de cada pelicula , ira recorriendo el json y hara una imagen y pondra el titulo
//uno por cada pelicula, la creacion de estas card va a estar encargado este modulo
//Hara todas las card de peliculas
//recibo por props
import "./PeliculasCard.css" 

import {Link} from "react-router-dom"
//import {Link} from "react-router-dom" // link funciona similar a una etiqueta a, que me permite hacer click y que me dirija hacia un determinado lugar

//import Estrellas from "../Components/Estrellas.jsx"
import {AiFillStar} from "react-icons/ai";

export const PeliculasCard = ({pelicula}) => {
const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`


  return (
   
    <li className="moviesCard" >
      <Link to= {`/pelicula/${pelicula.id}`}>
        <img className="movieImage" src={imgURL} alt={pelicula.title}/> 
      <div>{pelicula.original_title} </div>
    <AiFillStar color="grey" border="black"/>
    </Link>
  
{/*Con link encierro la imagen y el titulo y le indico que me lleve a /pelicula/pelicula.id en particular */}
     </li>
 
  );
};
