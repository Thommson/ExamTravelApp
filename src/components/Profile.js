import React, { Component } from 'react';
import TripCard from './ui/TripCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { auth, profile } = this.props;
    console.log(this.props)
    if(!auth.uid) return <Redirect to='/Login' />
    return (
      <div className="container-fluid">

        <div className="row">
            <div className="col h1Profile">
                 <h1 className="h1Profile">Profile</h1>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src="images/profilepic.png" className="profileImg" alt=""/>
            </div>

            <div className="col">
                <span className="username">{profile.username}</span>
            </div>

            <div className="col">
                <button className="buttons">Edit Profile</button>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <span className="profileCount">1.4K</span>
                <br></br>
                <span className="greenText">Followers</span>
            </div>

            <div className="col">
                <span className="profileCount">138</span>
                <br></br>
                <span className="greenText">Following</span>
            </div>

            <div className="col">
                <span className="profileCount">15</span>
                <br></br>
                <span className="greenText">Trips Created</span>
            </div>
        </div>

        <div className="row textCenter">
            <div className="col">
                <span className="profTripPin">Created Trips</span>
            </div>

            <div className="col">
                <span className="profTripPin">Pinned Trips</span>
            </div>

        </div>

         <TripCard />


    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Profile);
