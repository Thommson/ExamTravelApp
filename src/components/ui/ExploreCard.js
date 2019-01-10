import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { connect } from 'react-redux';

class ExploreCard extends Component {
  checkLikes = (e) => {
    for(let i = 0; i <= this.props.trip.likedBy.length; i++){

      if(this.props.trip.likedBy[i] === this.props.auth.uid){
        document.getElementById(this.props.trip.id).checked = true
        break
      } else {
        document.getElementById(this.props.trip.id).checked = false

      }
    }
  }
  checkPins = (e) => {

    for(let i = 0; i <= this.props.trip.pinnedBy.length; i++){
      if(this.props.trip.pinnedBy[i] === this.props.auth.uid){
        document.getElementById(this.props.trip.createdAt.nanoseconds).checked = true
        break
      } else {
        document.getElementById(this.props.trip.createdAt.nanoseconds).checked = false
      }
    }
  }
  handleLike = (e) => {

    if( e.target.checked === true){
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        likes: this.props.trip.likes + 1
      })
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        likedBy: firebase.firestore.FieldValue.arrayUnion(this.props.auth.uid)
      })

    } else {
        firebase.firestore().collection('trips').doc(this.props.trip.id).update({
          likes: this.props.trip.likes - 1
      })
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        likedBy: firebase.firestore.FieldValue.arrayRemove(this.props.auth.uid)
      })
    }
  }
  handlePin = (e) => {

    if( e.target.checked === true){
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        pins: this.props.trip.pins + 1
      })
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        pinnedBy: firebase.firestore.FieldValue.arrayUnion(this.props.auth.uid)
      })

    } else {
        firebase.firestore().collection('trips').doc(this.props.trip.id).update({
          pins: this.props.trip.pins - 1
      })
      firebase.firestore().collection('trips').doc(this.props.trip.id).update({
        pinnedBy: firebase.firestore.FieldValue.arrayRemove(this.props.auth.uid)
      })
    }
  }
  render(){
    const { trip, auth } = this.props;
    return (
      <div onLoad={this.checkLikes} onPointerEnter={this.checkPins} onPointerMove={this.checkLikes} className="card">
        <div className="row">
          <div className="col card-margin">
          <Link to={'/Trip/'+ trip.id} key={trip.id}>
            <div className="row card-description-margin">
                <div className="col-10">
                    <span className="countryVisited">{trip.country}, {trip.city}</span>
                    <p>{trip.description}</p>
                </div>

                <div className="col-2">
                  
                </div>
            </div>
            </Link>
            <div className="row">
                <div className="col">
                <label className="containerLabelLike">
                    <input type="checkbox" id={trip.id} onClick={this.handleLike}/>
                        <svg id='Layer_1' className="likePinSvg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <path d='M13.4,20.1c-0.8,0.7-1.9,0.7-2.7,0L10.6,20C5.3,15.3,1.9,12.2,2,8.3C2.1,6.6,2.9,4.9,4.3,4C7,2.2,10.2,3,12,5.1	C13.8,3,17,2.2,19.7,4c1.4,1,2.3,2.6,2.3,4.3C22.1,12.2,18.7,15.3,13.4,20.1C13.4,20,13.3,20.1,13.4,20.1z'
                            />
                        </svg>
                    <span className="pinLikeCount">{trip.likes}</span>
                    <span className="likeButton pinAmount" />
                </label>


                <label className="containerLabelLike">
                    <input type="checkbox" id={trip.createdAt.nanoseconds} onClick={this.handlePin}/>
                        <svg id='Layer_1' className="likePinSvg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
                            <path className='st0' d='M150.1,232.7l-67.2,67.9c-3.4,3.3-5.5,7.9-5.5,13c0,10,8.1,18.2,18,18.2h127.4v113.6	c0,12.5,10.2,22.7,22.7,22.7c12.5,0,22.7-10.2,22.7-22.7V331.8h136.5c9.9,0,18-8.2,18-18.2c0-5-2-9.5-5.3-12.8l-67.4-68.1V77.4h13.6	c12.5,0,22.7-10.2,22.7-22.7s-10.2-22.7-22.7-22.7H136.4c-12.5,0-22.7,10.2-22.7,22.7c0,12.5,10.2,22.7,22.7,22.7h13.6V232.7z M231.8,95.5v118.1c0,10-8.2,18.2-18.2,18.2c-10,0-18.2-8.2-18.2-18.2V95.5c0-10,8.2-18.2,18.2-18.2	C223.7,77.4,231.8,85.6,231.8,95.5z'
                            />
                        </svg>
                    <span className="pinLikeCount">{trip.pins}</span>
                </label>
            </div>

            <div className="col ">
                <Link to={'/Profiles/' + trip.authorId} className="usernameItalic width100 text-align-right">{trip.username}</Link>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }

}

export default connect(mapStateToProps)(ExploreCard);
