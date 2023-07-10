import React from 'react'
import '../style-sheet/Vision.css'

function Vision(props){
    return(
        <div className='contenedor-vision'>
             <img className='imagen-vision' 
             src={require('../imagen/birrete.png')}
            />
            <div className='texto-vision'>
                <h1>Nuestra Vision es</h1>
                <p className='vision'>{props.vision}</p>
            </div>
           
        </div>
    );
}

export default Vision;