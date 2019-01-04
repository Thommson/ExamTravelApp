import React from 'react';
import ToDoChecklist from './ui/ToDoChecklist';
import AlbumCard from './ui/AlbumCard';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const FullTripCard = (props) => {
  const { trip } = props;
  if(trip){
    return(
      <div className="container-fluid whiteBG">
        <div className="row greenBG">
            <div className="col userCol">
                <img src="images/profilepic.png" className="userImg" alt=""/>
                <span className="user">Timmy73</span>
            </div>
        </div>

        <div className="row greenBG">
            <div className="col">
                <h1 className="h1FullTripCard">{trip.country}, {trip.city}</h1>
            </div>
        </div>

        <div className="row greenBG">
             <div className="col flagPlacement">
                <img src="images/flag.png" className="flagImgFullTrip" alt=""/>
            </div>
        </div>

        <div className="row greenBG">
            <div className="col-m">
                <span className="pinB">Lik</span>
                <span className="likeAmount">20</span>
                <span className="pinB">Pin</span>
                <span className="likeAmount">20</span>
            </div>
         </div>

        <div className="row">
            <div className="col">
                <h3 className="fullCardTitle">10 hour hike</h3>
                <p className="fullCardDescr">
                    The hike was challenging but it was very rewarding.
                    Thew view at the top was very beautiful.
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <h3 className="fullCardTitle">To do's:</h3>
            </div>
        </div>

        <ToDoChecklist />


        <div className="row">
            <div className="col">
                <h3 className="fullCardTitle">Tips</h3>
                <p className="fullCardDescr">
                    Make sure you bring clothes for all weather.
                    The weather can change very quickly so be prepared for everything.
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <h3 className="fullCardTitle">Album</h3>

            </div>
        </div>

        <AlbumCard />

    </div>
    )
} else {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  )

  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const trips = state.firestore.data.trips;
  const trip = trips ? trips[id] : null
  return{
    trip: trip
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'trips'}
  ])
)(FullTripCard);
