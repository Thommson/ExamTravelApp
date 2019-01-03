import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/Explore" className="navbar-item">Explore</NavLink>
        <NavLink to="/Profile" className="navbar-item">Profile</NavLink>
        <NavLink to="/CreateTrip" className="navbar-item">CreateTrip</NavLink>
      </div>
    );
  }
}

export default Navbar;
