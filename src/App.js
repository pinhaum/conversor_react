import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="row">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="row">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="row">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>

    </div>
  );
}

export default App;
