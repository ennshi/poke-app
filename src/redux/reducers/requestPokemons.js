import {
    LIMIT_POKEMONS,
    POKEMONS_REQUEST,
    SEARCH_RESET,
    SET_DISPLAYED_POKEMONS,
    SET_FILTER,
    SET_SEARCH_NAME
} from '../constants';

const initialState = {
    totalPage: 0,
    pokemons: [],
    fetchedPokemons: [],
    fetchedPages: [],
    error: null,
    loading: false
};

export default (state = {...initialState}, {type, payload}) => {
    switch (type) {
        case POKEMONS_REQUEST.PENDING:
            return Object.assign(state, {
                loading: true
            });
        case POKEMONS_REQUEST.SUCCESS:
            return Object.assign(state, {
                fetchedPokemons: [...state.fetchedPokemons, ...payload.results],
                totalPage: Math.ceil(payload.count/LIMIT_POKEMONS),
                fetchedPages: [...state.fetchedPages, payload.page],
                loading: false
            });
        case POKEMONS_REQUEST.ERROR:
            return Object.assign(
                state,
                initialState,
                { error: 'Something went wrong' }
                );
        case SET_DISPLAYED_POKEMONS:
            return Object.assign(
                state,
                {
                    pokemons: state.fetchedPokemons.slice(payload.start, payload.end),
                }
            );
        case SET_FILTER:
        case SEARCH_RESET:
        case SET_SEARCH_NAME:
            return Object.assign(
                state,
                initialState
            );
        default:
            return state;
    }
}
