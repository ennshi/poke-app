import React from 'react';
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


function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={mainTheme}>
            <Router>
              <Navbar />
              <Grid container component="main" className={classes.app__main}>
                      <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/pokemon-compare' component={PokemonCompare} />
                          <Route path='/pokemon/:id' component={PokemonProfile} />
                          <Route component={NotFound} />
                      </Switch>
                  <Hidden only={['xs', 'sm', 'md']}>
                    <ActionContainer/>
                  </Hidden>
              </Grid>
            </Router>
        </ThemeProvider>
    );
}

export default App;
