import React from 'react';


function EmpleadoSegunLenguaje(props){
    return(
        <div className='contenedor-empleado'>
            <img className='foto-empleado'
            src={require(`../imagen/person_icon.png`)}/>

            <p className='nombre'>
                {props.nombre}
            </p>

            <div className='contenedor-lenguaje'>
                <p className='info'>{props.lenguaje.name}</p>

                <img className='imagen-lenguaje'
                src = {require(`../imagen/${props.lenguaje.name}.png`)}/>
            </div>
            
            <button className= 'boton-perfil'>
                Ver Perfil

                <img className='imagen-flecha'
                src={require(`../imagen/triangulo.png`)}/>
            </button>
        </div>
    );
}

export default EmpleadoSegunLenguaje;