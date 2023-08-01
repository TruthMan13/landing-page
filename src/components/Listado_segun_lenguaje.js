import React, { useEffect, useState } from 'react';
import '../style-sheet/Listado.css';

import BarraNavegacion from './Barra_navegacion_con_boton';
import EmpleadoSegunLenguaje from './Empleado_segun_lenguaje';

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
                    Según su Lenguaje
                </p>

                <img className='imagen-titulo'
                src = {require(`../imagen/language_icon.png`)}/>
            </div>

            <div className='fila'>
                {
                    listaDeveloper.map(dev => {
                        return(
                            <EmpleadoSegunLenguaje
                            nombre = {dev.name + ' ' + dev.lastname}
                            lenguaje = {dev.programmingLanguages[0]}
                            />)
                        }
                    )
                    
                }
                
            </div>
        </div>
        
    );
}

export default Listado;