import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import TypeBadge from './TypeBadge';

function PartyDetail ( props ) {


    const formattedName = () => {

        const name = props.pokemon.name;

        return name.charAt(0).toUpperCase() + name.slice(1);
    };


    const typeBadges = props.pokemon.types
        .map( ( type, index ) =>
            <TypeBadge
                key={ index }
                type={ type }/>
        );

    // Pokemon stats formatted as chart data
    const statChartData = [

        {
            name: "HP",
            value: props.pokemon.stats.hp
        },
        {
            name: "Attack",
            value: props.pokemon.stats.attack
        },
        {
            name: "Defense",
            value: props.pokemon.stats.defense
        },
        {
            name: "Sp. Attack",
            value: props.pokemon.stats['special-attack']
        },
        {
            name: "Sp. Defence",
            value: props.pokemon.stats['special-defense']
        },
        {
            name: "Speed",
            value: props.pokemon.stats.speed
        }
    ];


    const containerStyles = {

        // positioning
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // sizing
        width: '100%',

        // styling
        backgroundColor: '#c5c5c5',
        border: '2px solid black',
        borderRadius: '1em',

        // other
        overflow: 'hidden',
        userSelect: 'none'



    };

    const infoContainerStyles = {

        // positioning
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1.25em',

        // sizing
        width: '25%',
        height: '100%',

        // styling
        backgroundColor: '#c5c5c5',
        borderRight: '2px solid black'
    };

    const statsContainerStyles = {

        // positioning
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1.25em',

        // sizing
        height: '100%',
        flex: '1',

        // styling
        backgroundColor: '#c5c5c5'
    };


    const typeBadgeContainerStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: '1em'
    };


    return (

        <div style={ containerStyles } >

            <div style={ infoContainerStyles }>
                <span style={{ fontSize: '2em' }}>{`#${ props.pokemon.id } ${ formattedName() }`}</span>

                <div style={ typeBadgeContainerStyles }>
                    { typeBadges }
                </div>

                <img
                    src={ props.pokemon.sprite.front }
                    alt="Pokemon Sprite"
                    width="75%"
                    height="auto"/>
            </div>

            <div style={ statsContainerStyles }>
                <ResponsiveContainer>
                    <BarChart data={ statChartData }>
                        <XAxis dataKey="name" />
                        <YAxis type="number" domain={ [0, 200] } />
                        <Bar dataKey="value" fill="#8884d8" />
                        <Tooltip cursor={{fill: 'transparent'}} />
                    </BarChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default PartyDetail;
