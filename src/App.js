import './App.css';
import { Presentacion } from './componentes/Presentacion';
import { Navbar } from './componentes/Navbar';
import { Contacto } from './componentes/Contacto';
import { Plataformas } from './componentes/Plataformas';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="separador"></div>
      <div className="ContainerPrincipal">
      <h1 className='titulo' id='presentacion'>Presentación</h1>
      <Presentacion />
      <h1 className='titulo' id='plataformas'>Escuchanos</h1>
      <Plataformas />
      <h1 className='titulo' id='contacto'>Contacto</h1>
      <Contacto />
      </div>
    </div>
  );
}

export default App;

