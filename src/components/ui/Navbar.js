import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/Explore" className="Navbar-item">Explore</NavLink>
        <NavLink to="/Profile" className="Navbar-item">Profile</NavLink>
        <NavLink to="/CreateTrip" className="Navbar-item">CreateTrip</NavLink>
      </div>
    );
  }
}

export default Navbar;
