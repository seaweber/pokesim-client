
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import BattleItem from './BattleItem';
import { ReactSortable } from "react-sortablejs";
import { useDispatch, useSelector } from 'react-redux';
import { sendPickOrder, readyUp, setOrdered } from '../redux/actions/setActions';

function BattlePage ( props ){

	const dispatch = useDispatch();

	const session_id = useSelector( state => state.session_id );

	const currentUser = useSelector( state => state.currentUser );

	const ordered = useSelector( state => state.ordered );

	const [ ready, setReady ] = useState( false );

	const style = {
		margin: '1em',
		padding: '.5em',
		fontSize: '32px'
	};

    const theirListContainerStyles = {

        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center',
    };

    const myListContainerStyles = {

        display: 'flex',
        justifyItems: 'center',
    };

    const gamestate = useSelector( state => state.gamestate );

    const myParty = gamestate.players[ currentUser.uid ].party.filter( pokemon => pokemon.alive );

	const [ sortableParty, setSortableParty ] = useState( myParty );

	const theirParty = gamestate.players[ Object.keys( gamestate.players ).filter( player => player !== currentUser.uid ) ].party.filter( pokemon => pokemon.alive );

	const sendOrder = () => {
		dispatch( sendPickOrder( { session_id: session_id, user_id: currentUser.uid, party_order: sortableParty } ) );
		dispatch( setOrdered() );
	};

	const sendReady = () => {
		dispatch( readyUp( { session_id: session_id, user_id: currentUser.uid } ) );
	};

    const theirPartyListItems = theirParty
        .map( ( pokemon, index ) =>
            <BattleItem
                key={ index }
                pokemon={ pokemon }/>
        );

	const myPartyListItems = myParty
        .map( ( pokemon, index ) =>
            <BattleItem
                key={ index }
                pokemon={ pokemon }
				poke_id={ pokemon.pokemon_id }/>
        );


    const scaleView = {
        transform: 'scale(0.7)',
    };

	return (
            <div style={scaleView}>
				<span style={ { fontSize: '48px' } }>Opponent's Party</span>
		        <div style={ theirListContainerStyles }>
		            { theirPartyListItems }
		        </div>
		        <h1>
					{
						( myParty.length && theirParty.length ) ?
							'VS'
							: myParty.length ?
								'You Win!'
								: 'You Lose!'
					}
				</h1>
				{!ordered &&
					<ReactSortable list={sortableParty} setList={setSortableParty} style={myListContainerStyles}>
						{
							sortableParty.map((pokemon, index) =>
								<BattleItem
									key={index}
									pokemon={pokemon}/>)
						}
					</ReactSortable>}
				{ ordered && <div style={myListContainerStyles}>{ myPartyListItems }</div> }
				<span style={ { fontSize: '48px' } }>My Party</span><br/>

				{ !ordered ?
					<Button variant="danger" style= {style} onClick={ () => sendOrder() }>Start Fight</Button>
					: !ready ?
						<Button variant="danger" style= {style} onClick={ () => sendReady() }>Ready Up</Button>
						: <Button variant="disabled" style= {style} onClick={ () => sendOrder() }>Awaiting Opponent</Button>
				}
		    </div>

	)
}

export default BattlePage;
