import React from 'react'
import '../style-sheet/Buscar_segun.css'

function BusquedaSegun(props){
    return(
        <div className='busqueda-segun'>
            <img className='foto-descrictiva'
            src={require('../imagen/birrete.png')} 
             />
            <p>{props.buscar}</p>
        </div>
    );
}

export default BusquedaSegun;