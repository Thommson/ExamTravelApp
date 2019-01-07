import React from 'react';
import ExploreCard from './ExploreCard';

  const TripListProfiles = ({trips}) => {

    return (
      <div className="row grayBackground trip-list-padding">
        <div className="col">
          { trips && trips.map(trip => {
            return(
                <ExploreCard trip={trip} />
            )
          })}

        </div>
      </div>
    );
  }

  export default (TripListProfiles)
