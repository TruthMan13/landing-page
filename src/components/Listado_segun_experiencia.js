import React, { useEffect, useState } from 'react';
import '../style-sheet/Listado.css';

import BarraNavegacion from './Barra_navegacion_con_boton';
import EmpleadoSegunExperiencia from './Empleado_segun_experiencia';

function getList() {
    return fetch('http://localhost:5800/developer')
      .then(data => data.json())
  }

function Listado(){

    const [listaDeveloper, setListaDeveloper] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
          .then(items => {
            if(mounted) {
              setListaDeveloper(items)
            }
          })
        return () => mounted = false;
      }, [])
    
    
    console.log(listaDeveloper)

    return(
        <div>
            <BarraNavegacion/>

            <div className = 'contenedor-titulo'>
                <p className = 'titulo'>
                    Según su Experiencia
                </p>

                <img className='imagen-titulo'
                src = {require(`../imagen/experience-icon-23.png`)}/>
            </div>

            <div className='fila'>
                {
                    listaDeveloper.map(dev => {
                        return(
                            <EmpleadoSegunExperiencia
                            nombre = {dev.name + ' ' + dev.lastname}
                            experiencia = {dev.experience}
                            />)
                        }
                    )
                    
                }
                
            </div>
        </div>
        
    );
}

export default Listado;