import {GET__POKEMONS} from '../constants/urls';

export const fetchPokemons = async ({url = GET__POKEMONS, limit = 10, page = 1} = {}) => {
    try {
        const data = await fetch(`${url}?limit=${limit}&offset=${limit * (page - 1)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await data.json();
    } catch (e) {
       throw new Error(e);
    }
};
