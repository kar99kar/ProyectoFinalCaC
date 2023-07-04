//Explicacion min 50 de clase 16
import {useState, useEffect} from "react" //usamos esto para trabajar con los estados, cuando cambie el id de la peli ejecuta todo lo que esta dentro de useeffect, ejecuta el llamado a la api
import {useParams} from "react-router-dom"//tomamos lo que viaja en el parametro del componente para poder tomar el id
import {get} from "../utils/httpCliente"
import {Spinner} from "../Components/Spinner"
import "./PeliculaDetalle.css"
import Estrellas from "../Components/Estrellas.jsx"

export const PeliculaDetalle = ()=> {
    const {peliculaId}= useParams();
    const [cargando, setCargando] = useState(true);// uso el setCargando en usseEffect xq antes de que haga el llamado a la pelicula decimos que esta cargando con setCargando useState en true entonces cuando haga el llamaod y ya tenga las peliculas el estado donde estaba cargando el proceso pasara a false
    const [pelicula,setPelicula]= useState(null);

    useEffect(()=>{
        setCargando(true)//Paso 1 del estado inicial de la pelicula es cargando 
          get(`/movie/${peliculaId}`).then ((data)=>{
            setPelicula(data); //Paso 2 cuando ya carga la pelicula 
            setCargando(false)
          });
    },[peliculaId ] );
    if (cargando){
        return <Spinner/>
    }


const imgURL=`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

return (
    <div className="contenedorDetalle">
        <img className="col" src={imgURL} alt={pelicula.title}/>
    <div className="peliculaDetalle col">
        <p className="item">
            <strong>Titulo:</strong>
            {pelicula.title}
        </p>
        <p>
            <strong> Generos:  </strong>
            {pelicula.genres.map((genre)=>genre.name).join(", ")}
            {/*recorro todos los generos, de c/genero traigo el nombre y cu de los nombres los va a juntar con join*/ }
        </p>
        <p>
            <strong> Descripcion:  </strong>
            {pelicula.overview}
        </p>
        <p>
            <strong> Calificacion: </strong>
            <Estrellas/>
        </p>
        
    </div>
    </div>
);
};

//EXPLICACION
// const {peliculaId}= useParams() : en la variable peliculaId capturo todo lo que venga como parametro o sea capturo el id, porque al hacer el llamado
//a la API le dire que me seleccione una pelicula en particular

//const {pelicula,setPelicula}= useState(null): aqui voy a guardar la info de la pelicula, pelicula primero estara en null pero cuando
//setPelicula obtenga la informacion se lo pasara a pelicula 

//useEffect : aqui hago el llamado a la API , cuando hare el llamado= cuando cambien lo que este entre []
// o sea cuando entre el id de la pelicula en [] la funcion se activara (ejecutara) e ira a buscarla
//entonces se activara el metodo get 
//explicacion de estos en min 59 clase 16.
//en data estoy guardando el resultado en json de la llamada a la api get(`/movie/${peliculaID}`)
//en setpeliculas guardo la data que es la informacion de la pelicula  y le paso a pelicula en particular
//donde luego pelicula dejara de ser null y tendra la info de una pelicula

//ContenedorDetalle: aqui tengo la pelicula