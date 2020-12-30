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


function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <main>
          <Router>
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/pokemon-compare' component={PokemonCompare} />
                  <Route path='/pokemon/:id' component={PokemonProfile} />
                  <Route component={NotFound} />
              </Switch>
          </Router>
          <ActionContainer/>
      </main>
    </ThemeProvider>
  );
}

export default App;
