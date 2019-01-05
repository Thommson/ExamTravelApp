import React, { Component } from 'react';
import ExploreCard from './ExploreCard';
import { Link } from 'react-router-dom'
  const TripList = ({trips}) => {
    return (
      <div className="row">
        <div className="col">
          { trips && trips.map(trip => {
            return(
              <Link to={'/Trip/'+ trip.id} key={trip.id}>
                <ExploreCard trip={trip} />
              </Link>
            )
          })}

        </div>
      </div>
    );
  }

export default TripList;
