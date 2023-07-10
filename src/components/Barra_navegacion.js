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
            <a href="" className='loguer' >Loguear</a>

        </div>
    );
}

export default BarraNavegacion;