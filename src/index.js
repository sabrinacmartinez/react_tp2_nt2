import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals'; //generado por el proyecto
//import * as serviceWorker from './serviceWorker'; esto es lo que tiene el profe en su proyecto 

/*import { agregarJuego, agregarResenia } from './store/actions';
window.mi_store = store;
window.agregarJuego = agregarJuego;
window.agregarResenia = agregarResenia;
 esto solo se usa para prueba en el browser*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister(); esto es lo que tiene el profe en su proyecto 
