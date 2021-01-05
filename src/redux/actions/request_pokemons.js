import {LIMIT_POKEMONS, POKEMONS_REQUEST, SET_DISPLAYED_POKEMONS} from '../constants';
import {fetchPokemons} from '../../utils/fetch';
import {GET__POKEMONS, GET_FILTERED_POKEMONS} from '../../constants/urls';

export const requestAllPokemons = () => async (dispatch, getState) => {
    try {
        const {page} = getState().pagination;
        const {fetchedPages} = getState().pokemons;
        if(!fetchedPages.includes(page)) {
            dispatch({
                type: POKEMONS_REQUEST.PENDING
            });
            const result = await fetchPokemons({page, limit: LIMIT_POKEMONS});
            dispatch({
                type: POKEMONS_REQUEST.SUCCESS,
                payload: {...result, page}
            });
        }
        dispatch({
            type: SET_DISPLAYED_POKEMONS,
            payload: startEndIdx(page, LIMIT_POKEMONS)
        });

    } catch (e) {
        dispatch({
            type: POKEMONS_REQUEST.ERROR,
            payload: e.code
        });
    }
};

export const requestFilteredPokemons = () => async (dispatch, getState) => {
    dispatch({
        type: POKEMONS_REQUEST.PENDING
    });
    try {
        const {filter: {property, value}} = getState().search;
        const {page} = getState().pagination;
        const url = `${GET_FILTERED_POKEMONS[property]}/${value}`;
        const result = await fetchPokemons({url});
        let pokemons = [];
        if(property === 'type' && result.pokemon.length) {
            pokemons = result.pokemon.map(poke => ({name: poke.pokemon.name, url: poke.pokemon.url}));
        }
        if(property === 'color' && result.pokemon_species.length) {
            pokemons = result.pokemon_species;
        }
        dispatch({
            type: POKEMONS_REQUEST.SUCCESS,
            payload: {
                count: pokemons.length,
                results: pokemons
            }
        });
        dispatch({
            type: SET_DISPLAYED_POKEMONS,
            payload: startEndIdx(page, LIMIT_POKEMONS)
        });
    } catch (e) {
        dispatch({
            type: POKEMONS_REQUEST.ERROR,
            payload: e.code
        });
    }
};

export const requestPokemonByName = () => async (dispatch, getState) => {
    dispatch({
        type: POKEMONS_REQUEST.PENDING
    });
    try {
        const {searchName} = getState().search;
        const url = `${GET__POKEMONS}/${searchName}`;
        const result = await fetchPokemons({url});
        dispatch({
            type: POKEMONS_REQUEST.SUCCESS,
            payload: {
                count: 1,
                results: [{
                    name: searchName,
                    url: result.species.url
                }]
            }
        });
        dispatch({
            type: SET_DISPLAYED_POKEMONS,
            payload: startEndIdx(1, 1)
        });
    } catch (e) {
        dispatch({
            type: POKEMONS_REQUEST.ERROR,
            payload: e.code
        });
    }
};

export const setDisplayedPokemons = () => (dispatch, getState) => {
    const {page} = getState().pagination;
    dispatch({
        type: SET_DISPLAYED_POKEMONS,
        payload: startEndIdx(page, LIMIT_POKEMONS)
    });
    return Promise.resolve();
};

const startEndIdx = (page, limit) => {
    const start = ((page - 1) * limit);
    return {
        start,
        end: start + limit
    };
};
