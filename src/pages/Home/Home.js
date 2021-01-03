import React, {useEffect} from 'react';
import HomeHeader from './HomeHeader';
import PokemonList from '../../components/PokemonList/PokemonList';
import {useDispatch, useSelector} from 'react-redux'
import {requestAllPokemons, requestFilteredPokemons, requestPokemonByName} from '../../redux/actions/request_pokemons';

export default () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const error = useSelector(state => state.pokemons.error);
    const filter = useSelector(state => state.search.filter);
    const searchName = useSelector(state => state.search.searchName);
    useEffect(() => {
        if(filter) {
            dispatch(requestFilteredPokemons());
        } else if(searchName) {
            dispatch(requestPokemonByName());
        } else {
            dispatch(requestAllPokemons());
        }
    }, [filter, searchName]);
    return (
        <>
            <HomeHeader />
            { !error && <PokemonList pokemons={pokemons}/> }
            { error && <h1>{error}</h1> }
        </>
    )
}
