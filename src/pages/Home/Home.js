import React, {useEffect} from 'react';
import HomeHeader from './HomeHeader';
import PokemonList from '../../components/PokemonList/PokemonList';
import {useDispatch, useSelector} from 'react-redux'
import {requestAllPokemons, requestFilteredPokemons, requestPokemonByName} from '../../redux/actions/request_pokemons';
import Pagination from '../../components/Pagination/Pagination';

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
            <HomeHeader filter={filter} searchName={searchName}/>
            { !error &&
                <>
                    <PokemonList pokemons={pokemons}/>
                    <Pagination />
                </>
            }
            { error && <h1>{error}</h1> }
        </>
    )
}
