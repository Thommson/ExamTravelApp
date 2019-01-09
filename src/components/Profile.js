import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import TripListProfiles from './ui/TripListProfiles'

class Profile extends Component {
  handlePinnedLink = (e) => {
    e.preventDefault();
    this.props.history.push('/ProfilePinned');
    window.location.reload();
  }
  render() {
    const { trips, auth, profile } = this.props;
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

            </div>
        </div>
        <div className="row whitespace"></div>
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
        <div className="row whitespace"></div>
        <div className="row textCenter">
            <div className="col">
                <span className="profTripPin">Created Trips</span>
            </div>

            <div className="col">
                <span className="profTripPin inactiveNavColor" onClick={this.handlePinnedLink}>Pinned Trips</span>
            </div>

        </div>

        <div className="row">
          <div className="col">
            <TripListProfiles trips={trips}/>
          </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'trips', where: [['authorId', '==', props.auth.uid]] }
  ])
)(Profile)
