import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './styles';

export default ({pokemons}) => {
    const pokemonList = pokemons.map((pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />);
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes['pokemon-list__container']}>
            {pokemonList}
        </Grid>
    )
};
