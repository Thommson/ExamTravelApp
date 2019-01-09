import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import TripListProfiles from './ui/TripListProfiles'

class Profile extends Component {
  handleProfileLink = (e) => {
    e.preventDefault();
    this.props.history.push('/Profile');
    window.location.reload();
  }
  render() {
    const { trips, auth, profile, user } = this.props;

    if(!auth.uid) return <Redirect to='/Login' />
    if(trips && user){
      return (
        <div className="container-fluid">

          <div className="row">
              <div className="col">
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

          <div className="row">
              <div className="col">
                  <span className="profileCount">{user.followedBy.length}</span>
                  <br></br>
                  <span className="greenText">Followers</span>
              </div>

              <div className="col">
                  <span className="profileCount">{trips.length}</span>
                  <br></br>
                  <span className="greenText">Trips Created</span>
              </div>
          </div>

          <div className="row textCenter">
              <div className="col">
                  <span className="profTripPin" onClick={this.handleProfileLink}>Created Trips</span>
              </div>

              <div className="col">
                  <span className="profTripPin activeTab">Pinned Trips</span>
              </div>

          </div>

          <div className="row">
            <div className="col">
              <TripListProfiles trips={trips}/>
            </div>
          </div>
      </div>
      );
    } else {
      return(
        <div>Loading...</div>
      )

    }
    }

}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const id = state.firebase.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null
  return{
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    user: user,
    users: users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'trips', where: [['pinnedBy', 'array-contains', props.auth.uid]], orderBy: ['createdAt', 'desc'] },
    { collection: 'users' }
  ])
)(Profile)
