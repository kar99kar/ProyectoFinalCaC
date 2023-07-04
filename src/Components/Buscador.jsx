//clase 23 min 1.04hm
import {FaSearch} from "react-icons/fa";
import "./Buscador.css";
import {useState} from "react"; //paso 1 importar useState
import {useNavigate} from "react-router-dom";// paso7 importamos useNavigat
// navigate me enviaba a un lugar luego de la ejecucion de un evento


 export const Buscador = () => {
    const navigate = useNavigate() //Paso8 Defino la variable
    const [txtBuscador, setTxtBuscador]  = useState("") //paso2** controlamos el estado del input
 
    //Paso3 realizamos la funcion para controlar el submit cuando apretamos el boton buscar 
  const handleSubmit= (e)=> {
    //Paso2 no se realiza el submit
    e.preventDefault(); //Paso5 previene el evento que tiene por defecto el onSubmit, le indicamos no vas a ejecutarte hsta que no suceda el evento (la funcion) 
    navigate (`/?search=${txtBuscador}`) //CLASE24 MIN 35 Paso 9** enviar lo que se escribe en el input a la URL
       // con ? indicamos que todo llo que busque debe ser obligatorio
  } //esto explica en clase24 min7 es una funcion, el formulario respondera al boton submit, cuando se presione submit se ejecutara esta funcion

  return (
        <form className="containerBuscador" onSubmit={handleSubmit}> {/*este es el contenedor del buscador, paso4 ponemos el evento en el form handleSubmit o sea agrego la funcion al formulario*/}
            <div className="cajaBuscador"> {/*este div contiene la barra de busqueda*/}
             <input value = {txtBuscador} onChange={(e)=> setTxtBuscador(e.target.value.toUpperCase() )} type="text" className="inputBuscador"/>   {/*txtBuscador es el valor inicial que es vacio, esto explica en clase24 min 17 , Paso6 mostramos como controlar el input */}
              <button type= "submit" className="botonBuscador">
            <FaSearch/>
              </button>
            </div>
        </form>
    );
 };

// el componente Buscador me retornara un formulario 
//para poner un icono teniamos que buscar en react icons, luego seleccionar el icono elegido, importar el nombre del icono en el componente
//onChange me indica que cuando se realice un cambio haga tal cosa
//onChange={(e)=> setTxtBuscador(e.target.value.toUpperCase() )}
/* para que haga esto es ALT DE LA IZQUIERDA +SHIFT+A */  
// useLocation es un hook para capturar lo que viene por parametro 