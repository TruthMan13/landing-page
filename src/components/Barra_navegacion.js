import React from 'react';
import '../style-sheet/Barra_navegacion.css'


function BarraNavegacion(props){
    return(
        <div className='contenedor-barra-navegacion'>
            <a href="" className='buscar'> 
            <img className='lupa'
            src={require('../imagen/lupa.png')} 
            />
            </a>
            <a href="" className='loguer' >Log In.Dev</a>

        </div>
    );
}

export default BarraNavegacion;