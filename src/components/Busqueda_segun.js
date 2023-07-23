import React from 'react'
import '../style-sheet/Buscar_segun.css'

function BusquedaSegun(props){
    return(
        <div className='busqueda-segun'>
            <img className='foto-descrictiva'
            src={require(`../imagen/${props.segun}`)}/>

            <p>{props.buscar}</p>
            
            <button className= 'boton'>
                <img className='imagen-boton'
                src={require(`../imagen/triangulo.png`)} alt="Submit"/>
            </button>
           
            
        </div>
    );
}

export default BusquedaSegun;