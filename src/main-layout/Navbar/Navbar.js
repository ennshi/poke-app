import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AlbumIcon from '@material-ui/icons/Album';
import useStyles from './styles';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';

export default ({showMobileActions, toggleMobileActions}) => {
    const classes = useStyles();
    return (
        <>
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.navbar__toolbar}>
                <div className={classes.navbar__logo}>
                    <AlbumIcon color="secondary" />
                    <Typography variant="h6" color="secondary">
                        <Link to={'/'} className={classes['navbar__logo-text']}> Pok&eacute; App</Link>
                    </Typography>
                </div>
                <Hidden only={['lg']}>
                    <IconButton edge="end" aria-label="actions" onClick={toggleMobileActions}>
                        {showMobileActions ?
                            <ChevronRightIcon color="primary"/> :
                            <ChevronLeftIcon color="primary"/>
                        }
                    </IconButton>
                </Hidden>
                <Hidden only={['xs', 'sm', 'md']}>
                    <Box mr={4}>
                        <Typography variant="h4" color="primary">
                            Actions
                        </Typography>
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    </>
    )
};

