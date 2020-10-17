import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './components/styles/App.scss'


import AppFrame from "./components/AppFrame/AppFrame";
import NumberCard from "./components/CuadroResumen/CuadroResumen";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={NumberCard}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
