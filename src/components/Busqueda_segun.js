import React from 'react';
import {Link} from 'react-router-dom';
import '../style-sheet/Buscar_segun.css';

function BusquedaSegun(props){
    return(
        <div className='busqueda-segun'>
            <img className='foto-descrictiva'
            src={require(`../imagen/${props.segun}`)}/>

            <p>{props.buscar}</p>
            
            <Link to={`/${props.path}`}>
                <button className= 'boton'>
                    <img className='imagen-boton'
                    src={require(`../imagen/triangulo.png`)} alt="Submit"/>
                </button>
            </Link>
            
        </div>
    );
}

export default BusquedaSegun;