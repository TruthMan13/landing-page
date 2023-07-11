import React from 'react'
import '../style-sheet/Mision.css'
function Mision(props){
    return(
        <div className='mision'>
            
            <div className ='texto'>
            <h1>Nuestra Mision es</h1>
            <p className='p-mision'>{props.text}</p>
            </div>

            <img className='imagen-mision' 
            src={require('../imagen/idea_ico.png')} />
        </div>
    );
}

export default Mision;