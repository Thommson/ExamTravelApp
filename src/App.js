import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explore from './components/Explore';
import Profiles from './components/Profiles';
import Profile from './components/Profile';
import UpdateTrip from './components/UpdateTrip';
import ProfilePinned from './components/ProfilePinned';
import CreateTrip from './components/CreateTrip';
import Error404 from './components/Error404';
import Navbar from './components/ui/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import FullTripCard from './components/FullTripCard';
import ExploreTrending from './components/ExploreTrending';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={ ExploreTrending } exact />
            <Route path='/trip/:id' component={ FullTripCard } />
            <Route path='/Register' component={ Register } />
            <Route path='/Login' component={ Login } />
            <Route path='/Explore' component={ Explore } />
            <Route path='/ExploreTrending' component={ ExploreTrending } />
            <Route path='/Profile' component={ Profile } />
            <Route path='/ProfilePinned' component={ ProfilePinned } />
            <Route path='/CreateTrip' component={ CreateTrip } />
            <Route path='/Profiles/:id' component={ Profiles } />
            <Route path='/UpdateTrip/:id' component={ UpdateTrip } />
            <Route  component={ Error404 } />
          </Switch>
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
