import { combineReducers } from 'redux';
import requestPokemons from './requestPokemons';
import searchOptions from './searchOptions';
import pokemonsPagination from './pokemonsPagination';

export default combineReducers({
    pokemons: requestPokemons,
    search: searchOptions,
    pagination: pokemonsPagination
});
