import React from 'react';

function TypeBadge ( props ) {

    const typeColor = () => {

      switch ( props.type ) {

          case 'normal': return '#A8A878';
          case 'fighting': return '#C03028';
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

    const formattedType = () => {

        return props.type.charAt(0).toUpperCase() + props.type.slice(1);
    };

    const styles = {

        // positioning
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em',
        marginBottom: '0.5em',

        // sizing
        width: '3.7em',
        height: '0.5em',

        // styling
        backgroundColor: typeColor(),
        color: 'white',
        border: '2px solid black',
        borderRadius: '1em'
    };

    return(
        <div style={ styles }>
            { formattedType() }
        </div>
    );
}

export default TypeBadge;
