import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import PartyList from './components/PartyList'

function App() {

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <div className="App" style={ containerStyles } >
            <Router>
                <Switch>
                    <Route>

                        <PartyList exact path="/" />
                        

                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
