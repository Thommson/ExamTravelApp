import React, {Component} from 'react';
import ToDoChecklist from './ui/ToDoChecklist';
import AlbumCard from './ui/AlbumCard';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class FullTripCard extends Component {

  render(){
    const { trip, auth } = this.props;

    if(!auth.uid) return <Redirect to='/Login' />

    if(trip){
      return(
        <div className="container-fluid whiteBG">
          <div className="row greenBG">
              <div className="col userCol">

              <svg id='Layer_1' className="arrowSVG" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                      <path d='M14.9,6.7c-0.4-0.4-1-0.4-1.4,0l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L11,12	l3.9-3.9C15.3,7.7,15.3,7.1,14.9,6.7z'
                      />
                  </svg>


                  <img src="images/profilepic.png" className="userImg" alt=""/>
                  <Link to={'/Profiles/' + trip.authorId} className="user">{trip.username}</Link>
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
                  <span className="likeAmount">{trip.likes}</span>
                  <span className="pinB">Pin</span>
                  <span className="likeAmount">{trip.pins}</span>
              </div>
           </div>

          <div className="row">
              <div className="col">
                  <h3 className="fullCardTitle">{trip.title}</h3>
                  <p className="fullCardDescr">{trip.description}</p>
              </div>
          </div>

          <div className="row">
              <div className="col">
                  <h3 className="fullCardTitle">To do's:</h3>
              </div>
          </div>

          <form className="row">
             <div className="col">
                 <label  id="showTodo1" className="toDo">
                     {trip.todo1}
                 </label>
                 <label id="showTodo2" className="toDo">
                     {trip.todo2}
                 </label>
                 <label id="showTodo3" className="toDo">
                     {trip.todo3}
                 </label>
                 <label id="showTodo4" className="toDo">
                     {trip.todo4}
                 </label>
                 <label id="showTodo5" className="toDo">
                     {trip.todo5}
                 </label>
             </div>
         </form>


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
  }


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const trips = state.firestore.data.trips;
  const trip = trips ? trips[id] : null
  return{
    trip: trip,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'trips'}
  ])
)(FullTripCard);
