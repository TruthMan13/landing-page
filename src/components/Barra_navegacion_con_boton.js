import React from 'react';
import {Link} from 'react-router-dom';
import '../style-sheet/Barra_navegacion.css';


function BarraNavegacion(props){
    return(
        <div className='contenedor-barra-navegacion'>
            <Link to = '/'>
                <button className='boton-home'>
                    <img className='imagen-home'
                    src={require('../imagen/triangulo.png')}
                    />
                </button>
            </Link>
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