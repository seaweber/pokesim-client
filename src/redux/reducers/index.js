
const initialState = {

    currentUser: null,

    partyDetail: null,

    session_id: null,

    gamestate: null,

    order: false
};

const rootReducer = ( state = initialState, action ) => {

    if ( action.type === 'lobby-ready' ) {

        return {
            ...state,
            gamestate: action.state,
        }
    }

    if ( action.type === 'all-players-ordered' ) {

        return {
            ...state,
            gamestate: action.state,
        }
    }

    if ( action.type === 'battle-complete' ) {

        return {
            ...state,
            gamestate: action.state,
        }
    }

    if ( action.type === 'game-over' ) {

        return {
            ...state,
            gamestate: action.state,
        }
    }

    if ( action.type === 'SET_PARTY_DETAIL' ) {

        return {
            ...state,
            partyDetail: action.pokemon,
        }
    }

    if ( action.type === 'SET_GAME_STATE' ) {

        return {
            ...state,
            gamestate: action.state,
        }
    }

    if ( action.type === 'SET_CURRENT_USER' ) {

        return {
            ...state,
            currentUser: action.user,
        }
    }

    if ( action.type === 'SET_SESSION_ID' ) {

        return {
            ...state,
            session_id: action.session_id,
        }
    }

    if ( action.type === 'SET_ORDERED' ) {

        return {
            ...state,
            ordered: true,
        }
    }

    return state;
};

export default rootReducer;
