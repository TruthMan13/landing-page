import './login-page.css'

//Import componentes
import BarraNavegacion from './components/Barra_navegacion';
import Login from './components/Login'

function LoginPage() {
  return (
    
    <div className="App">    
        <BarraNavegacion />
        <Login />
  </div>
  );
}

export default LoginPage;
