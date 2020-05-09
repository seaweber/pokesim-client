import React, { useState, useEffect, createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import PartyList from './components/PartyList'
import BattlePage from './components/BattlePage'
import PartyForm from './components/PartyForm'
import UsernameForm from './components/UsernameForm'
import MatchMaking from './components/MatchMaking'
import { auth } from "./auth/fire";

import { setCurrentUser } from './redux/actions/setActions';
import axios from "axios";

export const AuthContext = createContext( null );

function App() {

    const dispatch = useDispatch();

    const [ loggedIn, setLoggedIn ] = useState( false );

    const [ currentUser, setCurrentUserInState ] = useState( false );

    const reduxUser = useSelector( state => state.currentUser );

    const gamestate = useSelector( state => state.gamestate );

    const generatePartyForNewUser = user_id => {

        console.log(`USER_ID: ${user_id}`);

        axios({
            method: 'post',
            url: 'https://us-central1-pokemon-412.cloudfunctions.net/generate-party',
            data: { user_id: user_id },
            headers: { 'crossDomain': 'true' }
        });
    };

    useEffect( () => {

        auth.onAuthStateChanged(  user => {
            if ( user ) {

                if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                    generatePartyForNewUser( user.uid );
                }

                console.log(user);
                setCurrentUserInState( user );
                dispatch( setCurrentUser( user ) );
                setLoggedIn( true );

            } else {
                console.log('SIGNED OUT');
                setCurrentUserInState( null );
                dispatch( setCurrentUser( null ) );
                setLoggedIn( false );
            }
        });
        console.log(`STATE: ${loggedIn}`)
    }, [ loggedIn ]);

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <AuthContext.Provider value={ { loggedIn, setLoggedIn } }>
            <button onClick={ () => auth.signOut() }>Sign Out</button><br/>
            { currentUser && `STATE: ${ currentUser.displayName }`}<br/>
            { reduxUser && `REDUX: ${ reduxUser.displayName }`}
            <Router>
                <Switch>
                    <Route path="/UsernameForm" component={ UsernameForm }>
                        { loggedIn && <Redirect to={ "/" }/>}
                    </Route>
                    <div className="App" style={ containerStyles } >

                        <Route path="/match" exact component={ MatchMaking }/>

                        <Route path="/PartyForm" component={ PartyForm }>
                            { !loggedIn && <Redirect to={ "/UsernameForm" }/> }
                        </Route>

                        <Route exact path="/PartyList" component={ PartyList }/>


                       <Route
                           path="/battle"
                           render={  () => <BattlePage user={ currentUser } />}
                       />

                    </div>
                </Switch>
            </Router>

        </AuthContext.Provider>

    );
}

export default App;
