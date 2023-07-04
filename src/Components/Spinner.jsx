
import "./Spinner.css"
import { FaSpinner } from 'react-icons/fa';//esto lo saque de react icons de npm
export const Spinner = ()=>{
    return <div className='spinner'> 
        <FaSpinner className='Spinning' size={60}/>
        </div>
}
//le pongo una clase al spinner porque debo darle el estilo para que simule que gira el spinner
//con spinning trabajo sobre el icono, con spinner lo centré