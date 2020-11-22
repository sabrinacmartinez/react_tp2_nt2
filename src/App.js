import AgregarJuegos from './components/AgregarJuegos'
import Home from './components/Home'
import BarraDeNavegacion from './components/BarraDeNavegacion'
import ListaDeJuegos from './components/ListaDeJuegos'
import Footer from './components/Footer'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

render() {
  return (
    <div className="component">
      <Router>
      <BarraDeNavegacion/>
      <div>
        <Switch>
        <Route exact path="/" component={Home}>
          </Route>
          <Route path="/AgregarJuegos" component={AgregarJuegos}>
          </Route>
          <Route path="/ListaDeJuegos" component={ListaDeJuegos}>
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer/>
  </div>
    );
  }
}

export default App;
