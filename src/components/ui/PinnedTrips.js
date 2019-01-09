import React, { Component } from 'react';
import TripListProfiles from './TripListProfiles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PinnedTrips extends Component{
  render(){
    const { trips, auth } = this.props;
    console.log(auth.uid)
    return(
        <div className="row">
          <div className="col">
            <TripListProfiles trips={trips}/>
          </div>
        </div>
    )
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
    { collection: 'trips', where: [['pinnedBy', 'array-contains', props.auth.uid]], orderBy: ['createdAt', 'desc']}
  ])
)(PinnedTrips)
