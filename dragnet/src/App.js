import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import layout from "./components/AppFrame/AppFrame";
import Welcome from './pages/Welcome/Welcome';


function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={layout}/>
        <Route exact path="/welcome" component={Welcome}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
