import React from 'react';
import '../style-sheet/Barra_navegacion.css'
import {Link} from 'react-router-dom';


function BarraNavegacion(props){
    return(
        <div className='contenedor-barra-navegacion'>
            <a href="" className='buscar'> 
            <img className='lupa'
            src={require('../imagen/lupa.png')} 
            />
            </a>
            <Link to = '/login'>
            <a href="" className='loguer' >Log In.Dev</a>
            </Link>
        </div>
    );
}

export default BarraNavegacion;