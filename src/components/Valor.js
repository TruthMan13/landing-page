import React from 'react'
import '../style-sheet/Valor.css'

function Valor(props){
    return(
        <div className='contenedor-valor'>            

            <div className='texto-valor'>
                <h1>Nuestros Valores Son</h1>
            <p className='valor'>{props.valor}</p>
            
            </div>
            <img className='imagen-valor'
            src={require('../imagen/birrete.png')} />
        </div>
    );
}

export default Valor;