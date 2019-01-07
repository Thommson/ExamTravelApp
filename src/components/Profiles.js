import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TripListProfiles from './ui/TripListProfiles';

const Profiles = (props) => {
    const id = props.match.params.id
    const { auth, user, trips } = props;


    if(!auth.uid) return <Redirect to='/Login' />
    if(user){
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
                  <span className="username">{user.username}</span>
              </div>

              <div className="col">
                  <button className="buttons">Follow</button>
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

            <TripListProfiles trips={trips} />

      </div>
      )
    } else {
      return(
          <div>Loading...</div>
      )
    }


  }


const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null
  return{
    trips: state.firestore.ordered.trips,
    user: user,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),

  firestoreConnect(props => [

    {collection: 'trips', where: [['authorId', '==', props.match.params.id]] },
    {collection: 'users'}
  ])
)(Profiles);
