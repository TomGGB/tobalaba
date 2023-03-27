import React, { Component } from 'react';
import { Presentacion } from './componentes/Presentacion';
import { Navbar } from './componentes/Navbar';
import { Contacto } from './componentes/Contacto';
import { Plataformas } from './componentes/Plataformas';

class App extends Component {
  state = {
    comentarios: [],
  };

  componentDidMount() {
    this.peticionGet();
  }

  peticionGet = () => {
    const dbUrl = process.env.REACT_APP_DB_URL;
    fetch(dbUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          comentarios: data,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="separador"></div>
        <div className="ContainerPrincipal">
          <Presentacion />
          <h1 className='titulo' id='instagram'>Instagram</h1>
          <iframe className='frameInstagram' title='PostInstagram' width="auto" height="500" src="https://www.instagram.com/p/Cp0aOBAOO0W/embed" frameBorder="0"></iframe>
          <Plataformas />
          <Contacto />
          <div className="table-responsive mx-auto" width="90% !important" >
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Correo</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {this.state.comentarios.map(function(comentario, index) {
                  return (
                    <tr key={index}>
                      <td>{comentario.correo}</td>
                      <td>{comentario.descripcion}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
