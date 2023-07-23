import React from 'react';
import '../style-sheet/Empresa.css';

function Empresa(props){

	return(
	<div className='contenedor-empresa'>
		<h1 className='nombre-empresa'>{props.nombre}</h1>

		<div className= 'contenedor-eslogan'>
			<h1 className='eslogan'>{props.eslogan}</h1>
		</div>
	</div>);

}

export default Empresa;