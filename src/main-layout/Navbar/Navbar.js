import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AlbumIcon from '@material-ui/icons/Album';
import useStyles from './styles';
import Hidden from '@material-ui/core/Hidden';

export default () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static" className={classes.navbar}>
            <Toolbar className={classes.navbar__toolbar}>
                <div className={classes.navbar__logo}>
                    <AlbumIcon color="secondary" />
                    <Typography variant="h6" color="secondary">
                        <span className={classes['navbar__logo-text']}> Pok&eacute; App</span>
                    </Typography>
                </div>
                <Hidden only={['lg']}>
                    <IconButton edge="end" aria-label="actions">
                        <ChevronLeftIcon color="primary"/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    </>
    )
};

