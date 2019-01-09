import React, { Component } from 'react';
import TripListProfiles from './TripListProfiles';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class CreatedTrips extends Component{
  render(){
    const { trips } = this.props
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
    { collection: 'trips', where: [['authorId', '==', props.auth.uid]] }
  ])
)(CreatedTrips)
