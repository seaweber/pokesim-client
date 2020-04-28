import React from 'react';
import { useDispatch } from 'react-redux';

import { setPartyDetail } from "../redux/actions/setActions";

import TypeBadge from './TypeBadge';

function PartyListItem ( props ) {


    const dispatch = useDispatch();


    const formattedName = () => {

        const name = props.pokemon.name;

        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    const typeColor = type => {

        switch ( type ) {

            case 'normal': return '#A8A878';
            case 'fight': return '#C03028';
            case 'flying': return '#A890F0';
            case 'poison': return '#A040A0';
            case 'ground': return '#E0C068';
            case 'rock': return '#B8A038';
            case 'bug': return '#A8B820';
            case 'ghost': return '#705898';
            case 'steel': return '#B8B8D0';
            case 'fire': return '#F08030';
            case 'water': return '#6890F0';
            case 'grass': return '#78C850';
            case 'electric': return '#F8D030';
            case 'psychic': return '#F85888';
            case 'ice': return '#98D8D8';
            case 'dragon': return '#7038F8';
            case 'dark': return '#705848';

            default: return '#FFFFFF';
        }
    };

    // Sum of all stats, which is what ultimately influences chances in battle
    const totalLevel = Object.values(props.pokemon.stats)
            .reduce( ( accumulator, stat ) => accumulator + stat );

    const typeBadges = props.pokemon.types
        .map( ( type, index ) =>
            <TypeBadge
                key={ index }
                type={ type } /> );

    /*
     * Render either single-color or dual-color background depending on
     * whether pokemon has 1 or 2 types
     */
    const backgroundColor = () => {

        const types = props.pokemon.types;

        return types.length > 1 ?
            { backgroundImage: `-webkit-linear-gradient(30deg, ${ typeColor(types[0]) } 50%, ${ typeColor(types[1]) } 50%)` }
            : { backgroundColor: typeColor(types[0]) }
    };


    const containerStyles = {

        // positioning
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em',
        margin: '.5em',

        // sizing
        width: '10em',

        // styling
        border: '2px solid black',
        borderRadius: '1em',
        fontSize: '1.5em',
        ...backgroundColor(),

        // other
        cursor: 'pointer',
        userSelect: 'none',
    };

    return(
        <div
            style={ containerStyles }
            onClick={ () => dispatch( setPartyDetail( props.pokemon ) ) }>

            <span style={{ marginBottom: '.5em'}}>{ formattedName() }</span>

            { `CP: ${ totalLevel }` }

            <img
                src={ props.pokemon.sprite.front }
                alt="Pokemon Sprite"
                width="50%"
                height="auto"/>

        </div>
    );
}

export default PartyListItem;
