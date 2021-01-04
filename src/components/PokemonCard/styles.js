import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    'pokemon-card__media': {
        objectFit: 'cover',
        height: '100px',
        width: '100px',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            height: '140px',
            width: '140px'
        }
    },
    'pokemon-card__title': {
        textAlign: 'center'
    },
    'pokemon-card__actions': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '10px'
    },
    'pokemon-card__btn-icon': {
        fontSize: '0.9rem'
    }
}));
