import React from 'react';

function CoverPage () {

    const containerStyles = {
        width: '100vw',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column'
    };

    return(
        <div style={ containerStyles }>
            <span style={ { fontSize: '64px' } }>Pokemon Battle Simulator</span>
            <span style={ { fontSize: '48px' } }>Sign in to play!</span>
        </div>
    );

}

export default CoverPage;
