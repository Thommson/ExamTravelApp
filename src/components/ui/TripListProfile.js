import React from 'react';
import TripCard from './TripCard';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
  const TripListProfile = ({trips}) => {

    return (
      <div className="row grayBackground trip-list-padding">
        <div className="col">
          { trips && trips.map(trip => {
            return(
                <TripCard trip={trip} />
            )
          })}

        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return{
      trips: state.firestore.ordered.trips
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [

    ])
  )(TripListProfile)
