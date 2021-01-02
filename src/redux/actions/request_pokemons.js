import {LIMIT_POKEMONS, POKEMONS_REQUEST} from '../constants';
import {fetchPokemons} from '../../utils/fetch';

export const requestAllPokemons = () => async (dispatch, getState) => {
    dispatch({
        type: POKEMONS_REQUEST.PENDING
    });
    try {
        const {page} = getState().pokemons;
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
