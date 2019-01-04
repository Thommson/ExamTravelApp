import React, { Component } from 'react';
import SearchField from 'react-search-field';
import ActivitySelector from './ui/ActivitySelector';
import ExploreCard from './ui/ExploreCard';

class Explore extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row grayBackground">
            <div className="col">
                 <h1 className="h1Explore">Explore</h1>
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

        <ExploreCard />
      </div>
    );
  }
}

export default Explore;
