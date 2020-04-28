import React from 'react';
import { useSelector } from 'react-redux';

import PCListItem from './PCListItem';
import PartyDetail from './PartyDetail';

import PokemonData from '../pokemon.json';

 // List of <PartyListItems/> representing the 6 pokemon in the party
function PartyList ( ) {


    // Retrieve selected pokemon from global state
    const selectedDetail = useSelector( state => state.partyDetail );

    // Substitute for database interaction
    const pc = [

        PokemonData[23],
        PokemonData[170],
        PokemonData[189],
        PokemonData[474],
        PokemonData[9],
        PokemonData[100],
        PokemonData[70],
        PokemonData[230],
        PokemonData[200],
        PokemonData[400],
        PokemonData[91],
        PokemonData[111]
    ];


    const pcListItems = pc
        .map( ( pokemon, index ) =>
            <PCListItem
                key={ index }
                pokemon={ pokemon }/>
        );




    const listContainerStyles = {

        display: 'inline-grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        justifyItems: 'start',
    };


    return(

        <div>
            <div style={ listContainerStyles }>
                { pcListItems }
            </div>

        </div>
    );
}

export default PartyList;
