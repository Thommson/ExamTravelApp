import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explore from './components/Explore';
import Profile from './components/Profile';
import CreateTrip from './components/CreateTrip';
import Error404 from './components/Error404';
import Navbar from './components/ui/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import FullTripCard from './components/FullTripCard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path='/FullTripCard' component={ FullTripCard } />
            <Route path='/Register' component={ Register } />
            <Route path='/Login' component={ Login } />
            <Route path='/' component={ Explore } exact />
            <Route path='/Explore' component={ Explore } />
            <Route path='/Profile' component={ Profile } />
            <Route path='/CreateTrip' component={ CreateTrip } />
            <Route  component={ Error404 } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
