import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './components/styles/App.scss'

import CuadroResumen from "./components/CuadroResumen/CuadroResumen";
import Twitter from "./pages/Twitter/Twitter";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Twitter}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
