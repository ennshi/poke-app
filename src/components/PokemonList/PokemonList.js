import React from 'react';

export default ({pokemons}) => {
    const pokemonList = pokemons.map((pokemon, i) => <p key={i}>{pokemon.name}</p>);
    return (
        <>
            <h1>Pokemon List</h1>
            {pokemonList}
        </>
    )
};
