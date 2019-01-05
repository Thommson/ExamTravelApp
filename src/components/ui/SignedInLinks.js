import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
      <div>
        <NavLink to="/Explore" className="navbar-item">Explore</NavLink>
        <NavLink to="/Profile" className="navbar-item">Profile</NavLink>
        <NavLink to="/CreateTrip" className="navbar-item">CreateTrip</NavLink>
        <a onClick={props.signOut} className="navbar-item">Log Out</a>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
