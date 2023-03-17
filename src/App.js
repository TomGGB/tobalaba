import logo from './logo.svg';
import './App.css';
import { Presentacion } from './componentes/Presentacion';
import { Navbar } from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="ContainerPrincipal">
      <h1 className='titulo'>Presentación</h1>
      <Presentacion />
      </div>
    </div>
  );
}

export default App;

