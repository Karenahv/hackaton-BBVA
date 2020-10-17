import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import layout from "./components/AppFrame/AppFrame";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={layout}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
