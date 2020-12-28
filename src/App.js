import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './main-layout/Navbar/Navbar';
import ActionContainer from './main-layout/ActionContainer/ActionContainer';
import Home from './pages/Home/Home';
import PokemonCompare from './pages/PokemonCompare/PokemonCompare';
import PokemonProfile from './pages/PokemonProfile/PokemonProfile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
