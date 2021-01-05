import React, {useEffect} from 'react';
import HomeHeader from './HomeHeader';
import PokemonList from '../../components/PokemonList/PokemonList';
import {useDispatch, useSelector} from 'react-redux'
import {
    requestAllPokemons,
    requestFilteredPokemons,
    requestPokemonByName,
    setDisplayedPokemons
} from '../../redux/actions/request_pokemons';
import Pagination from '../../components/Pagination/Pagination';

export default () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const error = useSelector(state => state.pokemons.error);
    const filter = useSelector(state => state.search.filter);
    const searchName = useSelector(state => state.search.searchName);
    const page = useSelector(state => state.pagination.page);
    const totalPage = useSelector(state => state.pokemons.totalPage);
    useEffect(() => {
        if(filter) {
            return dispatch((page === 1) ? requestFilteredPokemons() : setDisplayedPokemons());
        }
        if(searchName) {
            return dispatch(requestPokemonByName());
        }
            dispatch(requestAllPokemons());
    }, [filter, searchName, page]);
    return (
        <>
            <HomeHeader filter={filter} searchName={searchName}/>
            { !error &&
                <>
                    <PokemonList pokemons={pokemons}/>
                    <Pagination page={page} totalPage={totalPage}/>
                </>
            }
            { error && <h1>{error}</h1> }
        </>
    )
}
