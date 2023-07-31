import './App.css';

//Import componentes
import BarraNavegacion from './components/Barra_navegacion';
import Empresa from './components/Empresa';
import BusquedaSegun from './components/Busqueda_segun';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Valor from './components/Valor';


function App() {
  return (
    
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
      buscar= 'Segun Experiencia'
      />

      <BusquedaSegun
      segun = 'speciality.png'
      buscar= 'Segun Especialidad'
      />
    
    <BusquedaSegun
      segun = 'language_icon.png'
      buscar= 'Segun Lenguaje'
      />
    </div>

    <p className='contactar'>
      o 
      <button className='contactar-boton'>Contactanos</button>
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

export default App;
