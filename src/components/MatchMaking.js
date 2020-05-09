import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { createLobby, joinLobby, setSessionID } from '../redux/actions/setActions'

import { Redirect } from 'react-router-dom';

const { uuid } = require('uuidv4');

function MatchMaking ( ) {

    const dispatch = useDispatch();

    const currentUser = useSelector( state => state.currentUser );

    const gamestate = useSelector( state => state.gamestate );

    const [ loading, toggleLoading ] = useState( false );

    const [ values, setValues ] = useState( {
        myCode: "",
        theirCode: ""
    } );

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    const makeLobby = () => {

        const session_id = uuid();

        console.log(session_id);

        setValues( { ...values, myCode: session_id } );

        dispatch( setSessionID( session_id ) );

        dispatch( createLobby( { session_id: session_id, user_id: currentUser.uid } ) );

    };

    const enterLobby = () => {

        const session_id = values[ 'theirCode' ];

        dispatch( joinLobby( { session_id: session_id, user_id: currentUser.uid } ) );

        dispatch( setSessionID( session_id ) );

        toggleLoading( true );

    };

    return(
        <div>
            { gamestate && <Redirect to={ '/battle' } /> }
           <button onClick={ () => makeLobby() }>Create Lobby</button>
            <input type="disabled" value={ values.myCode } placeholder={"Share This Code"}/>
            <br/>
            <br/>
            <br/>
            <input placeholder={ " Paste Code Here" }  onChange={ handleChange("theirCode" ) }/>
            <button onClick={ () => enterLobby() } >Join Lobby</button><br/>
            { `Gamestate: ${ JSON.stringify(gamestate) }` }
        </div>

    );
}

export default MatchMaking;
