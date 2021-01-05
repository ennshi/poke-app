import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navbar: {
        backgroundColor: 'white',
        position: 'sticky',
        [theme.breakpoints.up('md')]: {
            position: 'static'
        }
    },
    navbar__toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navbar__logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    'navbar__logo-text': {
        color: 'white',
        paddingLeft: '6px',
        textShadow: logoTextShadow(theme.palette.primary.main)
    }
}));

const logoTextShadow = (color) => (`1px 1px 0 ${color},
            -1px 1px 0 ${color},
            1px -1px 0 ${color},
            -1px -1px 0 ${color},
            0px 1px 0 ${color},
            0px -1px 0 ${color},
            -1px 0px 0 ${color},
            1px 0px 0 ${color},
            2px 2px 0 ${color},
            -2px 2px 0 ${color},
            2px -2px 0 ${color},
            -2px -2px 0 ${color},
            0px 2px 0 ${color},
            0px -2px 0 ${color},
            -2px 0px 0 ${color},
            2px 0px 0 ${color},
            1px 2px 0 ${color},
            -1px 2px 0 ${color},
            1px -2px 0 ${color},
            -1px -2px 0 ${color},
            2px 1px 0 ${color},
            -2px 1px 0 ${color},
            2px -1px 0 ${color},
            -2px -1px 0 ${color};`
);
