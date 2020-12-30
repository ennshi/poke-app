import {createMuiTheme} from '@material-ui/core/styles';
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
        ]
    }
});

export const useStyles = makeStyles({
    app__main: {
        width: '100%',
        marginTop: '-20px',
        minHeight: '89.5vh',
        backgroundColor: randomColor(Object.values(COLORS))
    }
});
