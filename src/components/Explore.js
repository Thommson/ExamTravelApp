import React, { Component } from 'react';
import SearchField from 'react-search-field';
import ActivitySelector from './ui/ActivitySelector';
import TripList from './ui/TripList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Explore extends Component {

  render() {
    const { trips, auth } = this.props;
    if(!auth.uid) return <Redirect to='/Login' />

    return (
      <div className="container-fluid">
        <div className="row">
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

        <div className="row">
            <div className="col">
                 <h1 className="h2Explore">Activities</h1>
            </div>
        </div>

        <ActivitySelector />

        <div className="row textCenter">
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
        <TripList trips={trips} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'trips', orderBy: ['createdAt', 'desc'] }
  ])
)(Explore)
