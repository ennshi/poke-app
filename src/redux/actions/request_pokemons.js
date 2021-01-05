import {LIMIT_POKEMONS, POKEMONS_REQUEST} from '../constants';
import {fetchPokemons} from '../../utils/fetch';
import {GET__POKEMONS, GET_FILTERED_POKEMONS} from '../../constants/urls';

export const requestAllPokemons = () => async (dispatch, getState) => {
    dispatch({
        type: POKEMONS_REQUEST.PENDING
    });
    try {
        const {page} = getState().pagination;
        const result = await fetchPokemons({page, limit: LIMIT_POKEMONS});
        dispatch({
            type: POKEMONS_REQUEST.SUCCESS,
            payload: result
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
                    url
                }]
            }
        });
    } catch (e) {
        dispatch({
            type: POKEMONS_REQUEST.ERROR,
            payload: e.code
        });
    }
};
