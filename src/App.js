import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import PartyList from './components/PartyList'
import BattlePage from './components/BattlePage'
import PartyForm from './components/PartyForm'
import UsernameForm from './components/UsernameForm'

function App() {

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
  
            <Router>
                <Switch>
                    <Route path="/UsernameForm" component={UsernameForm}/>
                    <Route path="/PartyForm" component={PartyForm}/>
                    <div className="App" style={ containerStyles } >
                        <Route exact path="/abislam/pokemon-frontend" component={PartyList} />
                        <Route path="/battlepage" component={BattlePage} />
                    </div>
                </Switch>
            </Router>


    );
}

export default App;
