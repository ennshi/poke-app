import {createMuiTheme} from '@material-ui/core/styles';
import {red, blue, green} from '@material-ui/core/colors';

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
