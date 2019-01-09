import React from 'react';
import ExploreCard from './ExploreCard';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

  const TripList = ({trips, activityType}) => {

    return (
      <div className="row grayBackground trip-list-padding">
        <div className="col warn-position">
          <div className="warn">
            Sorry... There are no trips with the selected activity...
          </div>


          { trips && trips.map(trip => {
            return(
                <ExploreCard trip={trip} />
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
{ collection: 'trips', orderBy: ['createdAt', 'desc'] , where: [['activityType', '==', props.activityType]]}
    ])
  )(TripList)
