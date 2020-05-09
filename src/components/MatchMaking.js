import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { createLobby, joinLobby, setSessionID } from '../redux/actions/setActions'

import { Redirect } from 'react-router-dom';

import Button from "react-bootstrap/Button";

const { uuid } = require('uuidv4');

function MatchMaking ( ) {

    const dispatch = useDispatch();

    const currentUser = useSelector( state => state.currentUser );

    const gamestate = useSelector( state => state.gamestate );

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

    };

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '40vh',
        margin: 'auto'
    };

    const inputStyles = {
        width: '500px',
        height: '32px',
        fontSize: '24px',
    };

    return(
        <div style={ containerStyles }>
            { gamestate && <Redirect to={ '/battle' } /> }
            <div>
                <Button variant="danger" onClick={ () => makeLobby() }>Create Lobby</Button>
                <input style={ inputStyles } type="disabled" value={ values.myCode } placeholder={"Share This Code"}/>
            </div>

            <div>
                <input style={ inputStyles } placeholder={ " Paste Code Here" }  onChange={ handleChange("theirCode" ) }/>
                <Button variant="danger" onClick={ () => enterLobby() } >Join Lobby</Button><br/>
            </div>
        </div>

    );
}

export default MatchMaking;
