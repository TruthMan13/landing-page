import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Import componentes
import Listado_Experiencia from './components/Listado_segun_experiencia';
import Listado_Lenguaje from './components/Listado_segun_lenguaje';
import Listado_Especialidad from './components/Listado_segun_especialidad';
import Landing from './components/Landing';
import Login from './components/Login';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path= "" element = {<Landing/>}/>
          <Route path= "/experiencia" element = {<Listado_Experiencia/>}/>
          <Route path= "/especialidad" element = {<Listado_Especialidad/>}/>
          <Route path= "/lenguaje" element = {<Listado_Lenguaje/>}/>
          <Route path = "/login/" element = {<Login/>}/>
        </Routes>

      </div>
    </BrowserRouter>
    );
}

export default App;
