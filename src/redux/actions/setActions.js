
export const setCurrentUser = user => {

    return {
        type: 'SET_CURRENT_USER',
        user: user
    }
};

export const setSessionID = session_id => {

    return {
        type: 'SET_SESSION_ID',
        session_id: session_id
    }
};

export const setPartyDetail = pokemon => {

    return {
        type: 'SET_PARTY_DETAIL',
        pokemon: pokemon
    }
};

export const setGameState = state => {

    return {
        type: 'SET_GAME_STATE',
        state: state
    }
};

export const setOrdered = () => {

    return {
        type: 'SET_ORDERED',
    }
};

export const sendPickOrder = data => {

    return {
        type: 'send-pick-order',
        meta: { remote: true },
        data
    }
};

export const readyUp = data => {

    return {
        type: 'ready-up',
        meta: { remote: true },
        data
    }
};

export const swapPokemon = data => {

    return {
        type: 'swap-pokemon',
        meta: { remote: true },
        data
    }
};

export const createLobby = data => {

    return {
        type: 'create-lobby',
        meta: { remote: true },
        data
    }
};

export const joinLobby = data => {

    return {
        type: 'join-lobby',
        meta: { remote: true },
        data
    }
};


