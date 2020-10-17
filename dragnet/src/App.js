import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import '../../dragnet/src/components/styles/App.scss';
import Welcome from './pages/Welcome/Welcome';

import './components/styles/App.scss'
import AppFrame from "./components/AppFrame/AppFrame";
import NumberCard from "./components/CuadroResumen/CuadroResumen";
import './components/styles/App.scss'

import CuadroResumen from "./components/CuadroResumen/CuadroResumen";
import Twitter from "./pages/Twitter/Twitter";

function App() {
  return (
    <BrowserRouter>
      <switch>
        {/* <Route exact path="/" component={AppFrame}/> */}
        <Route exact path="/welcome" component={Welcome}/>
        {/* <Route exact path="/" component={NumberCard}/> */}
        <Route exact path="/" component={Twitter}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
