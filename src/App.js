import React, { useState, useEffect, createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import PartyList from './components/PartyList'
import BattlePage from './components/BattlePage'
import MatchMaking from './components/MatchMaking'
import CoverPage from './components/CoverPage'
import { auth, signInWithGoogle } from "./auth/fire";

import { setCurrentUser } from './redux/actions/setActions';
import axios from "axios";

export const AuthContext = createContext( null );

function App() {

    const dispatch = useDispatch();

    const [ loggedIn, setLoggedIn ] = useState( false );

    const [ currentUser, setCurrentUserInState ] = useState( false );

    const generatePartyForNewUser = user_id => {

        axios({
            method: 'post',
            url: 'https://us-central1-pokemon-412.cloudfunctions.net/generate-party',
            data: { user_id: user_id },
            headers: { 'crossDomain': 'true' }
        });
    };

    useEffect( () => {

        document.body.style.height = "90vh";

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

                setCurrentUserInState( null );
                dispatch( setCurrentUser( null ) );
                setLoggedIn( false );
            }
        });
    }, [ loggedIn ]);

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
    };

    const navStyles = {
        width: '30vw',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray'
    };

    return (
        <AuthContext.Provider value={ { loggedIn, setLoggedIn } }>

            <Router>

                <div style={ navStyles }>
                    { !loggedIn ?
                        <Button variant="danger" onClick={ () => signInWithGoogle() }>Sign In</Button>
                        : <Button variant="danger" onClick={ () => auth.signOut() }>Sign Out</Button> }
                    { loggedIn && <NavLink to={ '/party' }><Button variant="danger">Party</Button></NavLink> }
                    { loggedIn && <NavLink to={ '/match' }><Button variant="danger">Battle</Button></NavLink> }
                </div>

                <Switch>
                    <div className="App" style={ containerStyles } >

                        <Route path="/" exact component={ CoverPage }>
                            { loggedIn && <Redirect to={ '/party' }/> }
                        </Route>

                        <Route path="/match" component={ MatchMaking }>
                            { !loggedIn && <Redirect to={ '/' }/> }
                        </Route>

                        <Route path="/party" component={ PartyList }>
                            { !loggedIn && <Redirect to={ '/' }/> }
                        </Route>

                        <Route path="/battle" component={ BattlePage }>
                            { !loggedIn && <Redirect to={ '/' }/> }
                        </Route>

                    </div>
                </Switch>
            </Router>

        </AuthContext.Provider>

    );
}

export default App;
