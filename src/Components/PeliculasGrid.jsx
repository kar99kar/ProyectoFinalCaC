//En el proy anterior peliculasgrid recibia el json, en esta new version ya no, aqui importo 
//la funcion get contiene las credenciales
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
//useEffect actua de acuerdo a algun cambio en mi componente o en alguna variable en particular

import {Spinner} from "./Spinner.jsx"

import {PeliculasCard} from "./PeliculasCard";
import  "./PeliculasGrid.css";
import { useQuery } from "../hooks/useQuery.jsx";


// const [peliculas, setpeliculas] //array vacio con el estado inicial de las peliculas //funcion que trae las peliculas y actualiza el estado inicial
//[estadoInicial, funcionQueCambiaElEstadoInicial] el estadoInicial al principio esta vacio 
//setpeliculas me traera las peliculas y va a llenar el estadoinicial con las peliculas que estaremos consultando en la API
    
   export const PeliculasGrid =() => {

    const [peliculas,setPeliculas] = useState ([]) // con esto manejo los estados
    const [cargando,setCargando]= useState (true); 
     //Paso13 utilizo useQuery para obtener lo que buscamos , aqui exporto la funcion que es un hook
const query= useQuery()  //
const search = query.get("search") //aqui le indico a la vble search que deseo separar la informacion que estoy enviando 
//de useQuery me traigo el metodo get, el get me trae lo que viaja por parametro
//entonces useQuery me ayuda a capturar las partes separadas que aparecen en la barra de la url y la parte que deseo obtener la tengo que guardar en una vble, en este caso en la vble guardamos lo que que queremos buscar 
//en la vble query traigo todos los metodos de useQuery, con query.get indico que quiero solamente lo que viene por search
//con get le indicamos que de toda la url tiene que capturar search y lo reconoce porque ya lo declaramos en navigate
//entonces query ya sabra que search tiene por valor (`/?search=${txtBuscador}`) 
   
    
    useEffect(()=>{
        //Paso 15, hacemos un ternario: si hay una busqueda asigna un valor a la URL y sino cargara todas las peliculas. son endpoints distintos

        setCargando (true)
        const searchURL= search //guardo lo que viene de busqueda en una variable 
        ?"/search/movie?query= " + search
        :"/discover/movie" //"/discover/movie" es un endpoint
       
       //const searchURL= search ?"/search/movie?query= " + search:"/discover/movie"  puedo poner el if ternario en 1 sola linea
       //si hay una cambio en el busacdor apunta a este endpoint  /search/movie?query si no hay cambio apunta a  search:"/discover/movie
       
       get (searchURL).then((data)=>{ //
            setPeliculas(data.results);
        })
        setCargando(false)
   },[search]) //Paso14 Agregamos el search
   //el get es la funcion "/discover/movie" es el path entonces ahi pido las peliculas con un llamado y guardo la info en data
//el usseEffect se ejecutara cuando cambie la pagina y cuando haya un cambio en search entonces para eso trabajo en useEffect con un if ternario

   if (cargando){
    return <Spinner/>
}

 return(
        <ul className="moviesGrid"> 
        {peliculas.map ((pelicula) => ( <PeliculasCard key={pelicula.id} pelicula = {pelicula}/> ))} 
        
</ul>
    )
}
//perimero traigo todas las peliculas de la api y cuando haga click quiero que me traiga la info de 1 sola peli, ese click reconocera el id de la peli y me mostrara otro compoenente con sus detalles
//el ul lo tengo en peliculasGrid y el li sera el componente peliculasCard
// a.map le paso el componente PeliculaCard como parametro
//min 45 clase 15


///MIN 57 CLASE 23 explica del componente spinner en peliculasgrid