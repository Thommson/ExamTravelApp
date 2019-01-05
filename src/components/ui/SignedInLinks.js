import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
      <div>
      <NavLink to="/Explore" className="navbar-item">
      <svg id='Layer_1' className="svgSize" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10.1,19l0-5l4,0l0,5c0,0.5,0.5,1,1,1l3,0c0.5,0,1-0.5,1-1l-0.1-7l1.7,0c0.5,0,0.7-0.6,0.3-0.9l-8.4-7.5	c-0.4-0.3-1-0.3-1.3,0L3,11.2c-0.3,0.3-0.1,0.9,0.3,0.9l1.7,0l0.1,7c0,0.5,0.5,1,1,1l3,0C9.6,20,10.1,19.6,10.1,19z'
        />
       </svg>
      </NavLink>

      <NavLink to="/Profile" className="navbar-item">
      <svg id='Layer_1' className="svgSize" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12,12c2.2,0,4-1.8,4-4s-1.8-4-4-4S8,5.8,8,8S9.8,12,12,12z M12,14c-2.7,0-8,1.3-8,4v1c0,0.5,0.4,1,1,1h14c0.5,0,1-0.5,1-1	v-1C20,15.3,14.7,14,12,14z'
        />
      </svg>
      </NavLink>

      <NavLink to="/CreateTrip" className="navbar-item">
      <svg id='Layer_1'  className="svgSize" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16,13h-3v3c0,0.5-0.4,1-1,1s-1-0.5-1-1v-3H8	c-0.6,0-1-0.4-1-1s0.4-1,1-1h3V8c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.5,0,1,0.4,1,1S16.5,13,16,13z'
        />
      </svg>
      </NavLink>
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
