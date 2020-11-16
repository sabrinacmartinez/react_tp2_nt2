import './App.css';
import ListaDeJuegos from './components/ListaDeJuegos'
import ListaDeResenias from './components/ListaDeResenias'
import BarraDeNavegacion from './components/BarraDeNavegacion'
import React from 'react';

class App extends React.Component {

render() {
  return (
    <div className="App">
      <BarraDeNavegacion/>
      <h2>Mi app de juegos </h2>
      <ListaDeJuegos/>
      <ListaDeResenias/>
    </div>
    );
  }
}

export default App;
