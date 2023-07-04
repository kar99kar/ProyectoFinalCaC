//como PeliculasCard y PeliculasGrid estan juntas hacen 1 solo componente el cual como buena practica puedo encerrarlo
//en 1 solo LandingPages que renderizara los dos componenetes
//LandingPages es todo lo que mostramos 

import { PeliculasGrid } from "../Components/PeliculasGrid";
import {Buscador} from "../Components/Buscador"


export const LandingPage = ()=>{
    return <>
    <Buscador/>
     <PeliculasGrid/>
     
     </>
}

//<> este se llama fragment