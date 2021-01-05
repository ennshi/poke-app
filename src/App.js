import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './main-layout/Navbar/Navbar';
import ActionContainer from './main-layout/ActionContainer/ActionContainer';
import Home from './pages/Home/Home';
import PokemonCompare from './pages/PokemonCompare/PokemonCompare';
import PokemonProfile from './pages/PokemonProfile/PokemonProfile';
import NotFound from './pages/NotFound/NotFound';
import './styles';
import {mainTheme} from './styles';
import {ThemeProvider} from '@material-ui/core/styles';
import {useStyles} from './styles';
import {Hidden} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MobileActionContainer from './main-layout/MobileActionContainer/MobileActionContainer';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import {closeMobileActions, toggleMobileActions} from './redux/actions/toggle_mobile_actions';
import {setBgColor} from './utils/randomColor';
import {COLORS} from './constants/colors';

function App() {
    const showMobileActions = useSelector(state => state.mobile.show);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.search.filter);
    const classes = useStyles();
    const [mainBgColor, setMainBgColor] = useState('');
    useEffect(() => {
        setMainBgColor(setBgColor(filter, Object.values(COLORS)))
    }, [filter]);
    return (
        <ThemeProvider theme={mainTheme}>
            <Router>
                <Navbar toggleMobileActions={() => dispatch(toggleMobileActions())} showMobileActions={showMobileActions} />
                {showMobileActions && <MobileActionContainer/>}
                <Grid
                    container
                    component="main"
                    className={classes.app__main}
                    onClick={() => dispatch(closeMobileActions())}
                    style={{
                        backgroundColor: (mainBgColor || COLORS.RED)
                    }}
                >
                    <Grid item xs={12} lg={8}>
                        <Container className={classes.app__content}>
                            <Switch>
                                  <Route path='/' exact component={Home} />
                                  <Route path='/pokemon-compare' component={PokemonCompare} />
                                  <Route path='/pokemon/:id' component={PokemonProfile} />
                                  <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </Grid>
                    <Hidden only={['xs', 'sm', 'md']}>
                        <ActionContainer/>
                    </Hidden>
                </Grid>
            </Router>
        </ThemeProvider>
    );
}

export default App;
