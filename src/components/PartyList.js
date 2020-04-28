import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import PartyListItem from './PartyListItem';
import PartyDetail from './PartyDetail';

import PokemonData from '../pokemon.json';
import PCList from './PCList';

import BattleButtons from './BattleButtons';



 // List of <PartyListItems/> representing the 6 pokemon in the party
function PartyList ( ) {


    // Retrieve selected pokemon from global state
    const selectedDetail = useSelector( state => state.partyDetail );

    // Substitute for database interaction
    const party = [

        PokemonData[388],
        PokemonData[149],
        PokemonData[142],
        PokemonData[286],
        PokemonData[7],
        PokemonData[102]


    ];

    /*
    axios({
      method: 'get',
      url: 'http://cloudfunction.com/',
      responseType: 'stream'
    })
      .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });
    */
    // https://pokemon-412.appspot.com/retrievepokemon?username=spencer

    const partyListItems = party
        .map( ( pokemon, index ) =>
            <PartyListItem
                key={ index }
                pokemon={ pokemon }/>
        );

    const containerStyles = {

        // positioning
        display: 'flex',
        flexDirection: 'row',

        // sizing
        height: '50vh',
    };


    const listContainerStyles = {

        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center',
    };

    const scaleView ={
        transform: 'scale(0.7)',

    };

    return(
        <div>
            
            <div style={ scaleView }>
                <PCList />

                
                <div style={ containerStyles }>

                
                    <div style={ listContainerStyles }>
                        { partyListItems }
                    </div>
                    { /* Render conditionally based on whether a pokemon has been selected yet (selectedDetail != null) */ }
                    { selectedDetail && <PartyDetail pokemon={ selectedDetail }/> }
                </div>

            </div>
            <BattleButtons/>
        </div>

        

    );
}

export default PartyList;
