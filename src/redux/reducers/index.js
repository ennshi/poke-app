import { combineReducers } from 'redux';
import requestPokemons from './requestPokemons';
import searchOptions from './searchOptions';

export default combineReducers({
    pokemons: requestPokemons,
    search: searchOptions
});
