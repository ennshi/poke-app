import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    'home-header__container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0'
    },
    'home-header__icon': {
        color: theme.palette.secondary.main,
        fontSize: '2rem',
        marginRight: '-25px'
    },
    'home-header__chip': {
        marginRight: '10px'
    }
}));
