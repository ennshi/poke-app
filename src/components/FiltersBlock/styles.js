import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    filters__container: {
        display: 'flex',
        flexDirection: 'column'
    },
    filters__chips: {
        flexDirection: 'row',
        marginTop: '7px',
        marginBottom: '15px',
    }
});
