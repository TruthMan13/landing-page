import React from 'react';


function EmpleadoSegunEspecialidad(props){
    return(
        <div className='contenedor-empleado'>
            <img className='foto-empleado'
            src={require(`../imagen/person_icon.png`)}/>

            <p className='nombre'>
                {props.nombre}
            </p>

            <p className='info'>{props.especialidad}</p>

            <button className= 'boton-perfil'>
                Ver Perfil

                <img className='imagen-flecha'
                src={require(`../imagen/triangulo.png`)}/>
            </button>
        </div>
    );
}

export default EmpleadoSegunEspecialidad;