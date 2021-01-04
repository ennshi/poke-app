import {unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import {red, blue, green} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import {randomColor} from './utils/randomColor';
import {COLORS} from './constants/colors';

export const mainTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
        success: green
    },
    typography: {
        fontFamily: [
            'Righteous',
            'serif'
        ],
        h1: {
            fontSize: '2rem'
        },
        h4: {
            fontSize: '1.6rem'
        },
        h5: {
            fontSize: '1.4rem'
        },
        h6: {
            fontSize: '1.2rem'
        }
    }
});

export const useStyles = makeStyles((theme) => ({
    app__main: {
        width: '100%',
        minHeight: '89.5vh',
        backgroundColor: randomColor(Object.values(COLORS))
    },
    app__content: {
        width: '90%',
        margin: '15px auto',
        [theme.breakpoints.down('xs')]: {
            width: '99%'
        }
    },
}));
