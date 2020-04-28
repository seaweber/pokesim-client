//https://stackoverflow.com/questions/45980173/react-axios-network-error
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

import PartyListItem from './PartyListItem';
import PartyDetail from './PartyDetail';
import PokemonData from '../pokemon.json';



function BattlePage ( props ){


	const style = {
		margin: '1em'
	}

    const listContainerStyles = {

        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center',
    };


    const party1 = [

        PokemonData[388],
        PokemonData[149],
        PokemonData[142],
        PokemonData[286],
        PokemonData[7],
        PokemonData[102]


    ];

    const party2 = [

        PokemonData[200],
        PokemonData[100],
        PokemonData[150],
        PokemonData[300],
        PokemonData[11],
        PokemonData[480]


    ];
    

    
     const getParty =  axios.get('https://pokemon-412.appspot.com/retrievepokemon?username=spencer').then(response => {
            console.log(response)
        })
    
    console.log(getParty)
    /*
    axios({
      method: 'get',
      url: 'https://pokemon-412.appspot.com/retrievepokemon?username=spencer',
      responseType: 'stream'
    })
      .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });
    */
    // https://pokemon-412.appspot.com/retrievepokemon?username=spencer
    const partyListItems1 = party1
        .map( ( pokemon, index ) =>
            <PartyListItem
                key={ index }
                pokemon={ pokemon }/>
        );



    const partyListItems2 = party2
        .map( ( pokemon, index ) =>
            <PartyListItem
                key={ index }
                pokemon={ pokemon }/>

        );

    
    const scaleView ={
        transform: 'scale(0.7)',

    };





	return (
		<div>
			<div style={scaleView}>
		        <div style={ listContainerStyles }>
		            { partyListItems1 }
		        </div>
		        <h1>VS</h1>
		        <div style={ listContainerStyles }>
		            { partyListItems2}
		        </div>
		    </div>	        

			<Button variant="danger"  style= {style}>Start Fight</Button>
			<Link to='/'>
				<Button variant="danger"  style= {style}>Back</Button>
			</Link>
		</div>


	)
}

export default BattlePage;
