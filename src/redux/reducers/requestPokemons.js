import {POKEMONS_REQUEST} from '../constants';

const initialState = {
    page: 1,
    count: 0,
    pokemons: [],
    error: null,
    loading: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case POKEMONS_REQUEST.PENDING:
            return Object.assign(state, {
                loading: true
            });
        case POKEMONS_REQUEST.SUCCESS:
            return Object.assign(state, {
                pokemons: payload.results,
                count: payload.count,
                page: state.page + 1,
                loading: false
            });
        case POKEMONS_REQUEST.ERROR:
            return Object.assign(
                state,
                initialState,
                { error: 'Something went wrong' }
                );
        default:
            return state;
    }
}
