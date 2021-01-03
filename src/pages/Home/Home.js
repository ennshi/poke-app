import React, {useEffect} from 'react';
import HomeHeader from './HomeHeader';
import PokemonList from '../../components/PokemonList/PokemonList';
import {useDispatch, useSelector} from 'react-redux'
import {requestAllPokemons, requestFilteredPokemons} from '../../redux/actions/request_pokemons';

export default () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const error = useSelector(state => state.pokemons.error);
    const filter = useSelector(state => state.search.filter);
    useEffect(() => {
        dispatch(requestAllPokemons());
    }, []);
    useEffect(() => {
        if(filter) {
            dispatch(requestFilteredPokemons());
        }
    }, [filter]);
    return (
        <>
            <HomeHeader />
            { !error && <PokemonList pokemons={pokemons}/> }
            { error && <h1>{error}</h1> }
        </>
    )
}
