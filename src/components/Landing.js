import React from 'react';

import '../style-sheet/Landing.css';

import BarraNavegacion from './Barra_navegacion';
import Empresa from './Empresa';
import BusquedaSegun from './Busqueda_segun';
import Mision from './Mision';
import Vision from './Vision';
import Valor from './Valor';

function Landing(){
  return(
    <div className="App">   
      <BarraNavegacion /> 
      <Empresa
      nombre ='In.Dev' 
      eslogan ='Tenemos a la persona adecuada para el trabajo.'/>

      <p className='titulo-busqueda'>Búscala</p>

      <div className= "contenedor-principal">
    
      
      <div className='panel-busqueda'>
      
      <div className='busqueda'>
        <BusquedaSegun
        segun = 'experience-icon-23.png'
        path = 'experiencia'
        buscar= 'Segun Experiencia'
        />

        <BusquedaSegun
        segun = 'speciality.png'
        path = 'especialidad'
        buscar= 'Segun Especialidad'
        />
      
        <BusquedaSegun
        segun = 'language_icon.png'
        path = 'lenguaje'
        buscar= 'Segun Lenguaje'
        />
      </div>

      <p className='contactar'>
        o 
        <button className='contactar-boton'>Contáctanos</button>
        <br/>
        Para que lo busquemos por ti
      </p>
    
      </div>

        <Mision 
        text='Ofrecer a los profesionales mas experimentados y 
        capacitados para resolver tus problemas y hacer realidad tus ideas.'/>

        <Vision 
        vision ='Ampliar nuestra familia de profesionales para dejar nuestra huella en cada proyecto.' />
        
        <Valor 
        valor = 'Liderazgo. Innovación. Colaboración. Integridad. Responsabilidad. Pasión. Experiencia. Excelencia. Calidad.' />
      
      </div>

    </div>
  );
}

export default Landing;