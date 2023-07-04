import { useLocation } from "react-router-dom";//Paso 10**importamos useLocation  https://reactrouter.com/en/main/hooks/use-location

export const useQuery= () => { //Paso 12-hago el llamado de la funcion  -con esta funcion capturamos lo que viene por parametro, en useQuery guardamos la locacion 
    return new URLSearchParams(useLocation().search)// metodo de useLocacion
  //de useLocation necesito guardar search, con el hook URLSearchParams capturo lo que viene por url 
//con useQuery decimos vas a guardar lo que buscaste en search ya con el valor separado, una vez que lo tengo separado con useLocation 
//esta funcion cuando se ejecute estara capturando todo el tiempo lo que mando por la url escribiendo en el buscador
 }
 

/*Paso 11 vemos en el navegador lo que viaja en la url (queryParams), separamos lo que buscamos 
const location= useLocation()
console.log (location);
console.log(location.search);*/ 
