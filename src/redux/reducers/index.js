import { combineReducers } from 'redux';
import requestPokemons from './requestPokemons';

export default combineReducers({
    pokemons: requestPokemons
});
