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

        <div onClick={props.signOut} className="navbar-item">
        <svg id='Capa_1'  className="svgSize logoutSVG" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M510.4,226.5c-1.1-2.6-2.6-5-4.6-7l-64-64c-8.3-8.3-21.8-8.3-30.2,0c-8.3,8.3-8.3,21.8,0,30.2l27.6,27.6H320 c-11.8,0-21.3,9.6-21.3,21.3S308.2,256,320,256h119.2l-27.6,27.6c-8.3,8.3-8.3,21.8,0,30.2c4.2,4.2,9.6,6.3,15.1,6.3 s10.9-2.1,15.1-6.3l64-64c2-2,3.5-4.3,4.6-7C512.5,237.6,512.5,231.7,510.4,226.5z'
    />
    <path d='M362.7,298.7c-11.8,0-21.3,9.6-21.3,21.3v106.7H256V85.3c0-9.4-6.2-17.7-15.2-20.4l-74.1-22.2h174.6v106.7 c0,11.8,9.5,21.3,21.3,21.3s21.3-9.6,21.3-21.3v-128C384,9.6,374.5,0,362.7,0H21.3c-0.8,0-1.5,0.3-2.2,0.4 c-1,0.1-1.9,0.3-2.9,0.5C14,1.5,12,2.4,10.1,3.6c-0.5,0.3-1,0.3-1.5,0.7C8.4,4.4,8.4,4.6,8.2,4.7c-2.3,1.8-4.3,4.1-5.7,6.7 c-0.3,0.6-0.4,1.2-0.6,1.8c-0.7,1.6-1.4,3.2-1.7,5c-0.1,0.6,0.1,1.2,0.1,1.9c0,0.4-0.3,0.8-0.3,1.2V448 c0,10.2,7.2,18.9,17.2,20.9l213.3,42.7c1.4,0.3,2.8,0.4,4.2,0.4c4.9,0,9.7-1.7,13.5-4.8c4.9-4.1,7.8-10.1,7.8-16.5v-21.3h106.7 c11.8,0,21.3-9.6,21.3-21.3V320C384,308.2,374.5,298.7,362.7,298.7z'
    />
</svg>
        </div>

      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
