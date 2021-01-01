import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    'compare__pokemons-list': {
        display: 'flex',
        flexDirection: 'column',
    },
    compare__pokemon: {
        display: 'flex',
        marginBottom: '5px'
    },
    compare__button: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    }
});
