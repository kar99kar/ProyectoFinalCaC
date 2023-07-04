//App.jsx renderiza PeliculasGrid
import './App.css';
import {LandingPage} from "./pages/LandingPage" ;
import { PeliculaDetalle } from "./pages/PeliculaDetalle";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//aqui le indicamos que queremos trabajar con rutas de react-router-dom
//BrowserRouter es una etiqueta que encierra todo, donde le incico que todo lo que renderice App podra trabajar con rutas
//Routes indica que adentro de la etiqueta se empezara a definir las rutas
//en Route defino la ruta


function App() {
  return (
    <BrowserRouter>  
      <header>
      <Link to="/">
    <h1 className='title'> PELICULAS </h1>
    </Link >
     </header>
    
      <Routes>
         <Route path="/" element={<LandingPage/>}/>
         {/*indico que cuando este en el index renderice el element*/ }
         <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/> 
         {/*indico que cuando este en el detalle renderice lo que esta en element*/ }
         
      </Routes>

    </BrowserRouter>
  );
}
export default App;

//MIN 17 CLASE 23