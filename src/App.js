import './App.css';
import ListaDeJuegos from './components/ListaDeJuegos'
import ListaDeSinopsis from './components/ListaDeSinopsis'
import Registro from './components/Registro'
import Home from './components/Home'
import BarraDeNavegacion from './components/BarraDeNavegacion'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

render() {
  return (
    <div className="App">
      <Router>
      <BarraDeNavegacion/>
      <div>
        <Switch>
        <Route path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/ListaDeJuegos" component={ListaDeJuegos}>
            <ListaDeJuegos />
          </Route>
          <Route path="/ListaDeSinopsis" component={ListaDeSinopsis}>
            <ListaDeSinopsis />
          </Route>
          <Route path="/Registro" component={Registro}>
            <Registro />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
    );
  }
}

export default App;
