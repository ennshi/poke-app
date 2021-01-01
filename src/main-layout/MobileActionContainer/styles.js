import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    'mobile-actions__container': {
        width: '100%',
        height: '100%',
        top: '4rem',
        position: 'fixed',
        backgroundColor: 'white',
        right: '0',
        [theme.breakpoints.down('xs')]: {
            top: '3.5rem',
        },
    }
}));
