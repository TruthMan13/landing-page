import React from 'react';
import '../style-sheet/Login.css'

function Login(){
 return(
 <div className='contenedorLogin'>
    <h1>Log In.dev</h1>
    <div classname='for'>
        <form action=''>
        <h1>Nombre de Usuario</h1>
        <label >
            <input type='text' id="username"/>
            
        </label>    

        <h1>Contraseña</h1>
        <label>
            <input type="password" id="password"/>
        </label>
        
        </form>  


               
    </div>

        <button className='logBoton' >
            <img className="triangulo-boton" 
            src={require(`../imagen/triagulo-log.png`)} alt="Submit"
            />
        </button>
        
        <div className='registrar'>
        <p>¿No tienes una cuenta? <a className='bontonRegistrar'>Registrate</a> aquí</p>
        </div>  
</div>
);       
}
export default Login;