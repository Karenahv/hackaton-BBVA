import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import '../../dragnet/src/components/styles/App.scss';
import Welcome from './pages/Welcome/Welcome';

import './components/styles/App.scss'
import './components/styles/App.scss'

import Twitter from "./pages/Twitter/Twitter";
import Youtube from "./pages/YouTube/Youtube";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/twitter" component={Twitter}/>
                <Route exact path="/youtube" component={Youtube}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
