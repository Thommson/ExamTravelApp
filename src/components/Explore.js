import React, { Component } from 'react';
import SearchField from 'react-search-field';
import ActivitySelector from './ui/ActivitySelector';
import ExploreCard from './ui/ExploreCard';

class Explore extends Component {

  constructor(props){
    super(props);

    this.state = {
      allTrips: [
        {
          id:"1",
          tripCountry: "Canada"
        },
        {
          id:"2",
          tripCountry: "Germany"
        },
        {
          id:"3",
          tripCountry: "Sweden"
        },
      ],
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row grayBackground">
            <div className="col h1Profile">
                 <h1 className="h1Profile">Explore</h1>
            </div>

            <div className="col">
            <SearchField
              placeholder='Search country, city'
              classNames="exploreSearch"
            />
            </div>

        </div>

        <div className="row grayBackground">
            <div className="col">
                 <h1 className="h2Explore">Activities</h1>
            </div>
        </div>

        <ActivitySelector />

        <div className="row grayBackground textCenter">
          <div className="col">
              <span className="profTripPin">Trending</span>
          </div>

          <div className="col">
              <span className="profTripPin">Recent</span>
          </div>

          <div className="col">
              <span className="profTripPin">Followed</span>
          </div>
        </div>
        {
          this.state.allTrips.map((trip) => {
            return(
              <ExploreCard tripCountry={trip.tripCountry} tripId={trip.id} key={trip.id} />
            )

          })

        }

      </div>
    );
  }
}

export default Explore;
