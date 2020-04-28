import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import PartyList from './components/PartyList'
import BattlePage from './components/BattlePage'

function App() {

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
  
            <Router>
                <Switch>
                    <div className="App" style={ containerStyles } >
                        <Route exact path="/" component={PartyList} />
                        <Route path="/battlepage" component={BattlePage} />
                    </div>
                </Switch>
            </Router>


    );
}

export default App;
