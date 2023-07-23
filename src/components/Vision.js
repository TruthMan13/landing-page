import React from 'react'
import '../style-sheet/Vision.css'

function Vision(props){
    return(
        <div className='contenedor-vision'>
             <img className='imagen-vision' 
             src={require('../imagen/group_icon.png')}
            />
            <div className='texto-vision'>
                <h1>Nuestra Vision es</h1>
                <p className='p-vision'>{props.vision}</p>
            </div>
           
        </div>
    );
}

export default Vision;