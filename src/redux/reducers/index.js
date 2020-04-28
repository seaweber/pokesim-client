const initialState = {
    partyDetail: null
};

const rootReducer = ( state = initialState, action ) => {

    if ( action.type === 'SET_PARTY_DETAIL' ) {

        return {
            ...state,
            partyDetail: action.pokemon,
        }
    }

    return state;
};

export default rootReducer;
