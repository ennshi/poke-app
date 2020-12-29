import { combineReducers } from 'redux';
import fetchPokemons from './fetchPokemons';

export default combineReducers({
    pokemons: fetchPokemons
});
