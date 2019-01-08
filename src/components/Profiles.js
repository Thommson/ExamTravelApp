import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TripListProfiles from './ui/TripListProfiles';
import firebase from 'firebase/app';

class Profiles extends Component {
  checkFollows = (e) => {
      for(let f = 0; f <= this.props.user.followedBy.length; f++){

        if(this.props.user.followedBy[f] === this.props.auth.uid){

          document.getElementById(this.props.user.username).checked = true
          break
        } else {
          document.getElementById(this.props.user.username).checked = false
        }
      }
  }
    addToFollowList = (e) => {
      if( e.target.checked === true){
        firebase.firestore().collection('users').doc(this.props.user.userId).update({
          followedBy: firebase.firestore.FieldValue.arrayUnion(this.props.auth.uid)
        })
      } else {
        firebase.firestore().collection('users').doc(this.props.user.userId).update({
          followedBy: firebase.firestore.FieldValue.arrayRemove(this.props.auth.uid)
        })
      }
    }
    render(){
      const { auth, user, trips } = this.props;
      if(!auth.uid) return <Redirect to='/Login' />
      console.log(this.props)
      if(user){
        return (
          <div onPointerMove={this.checkFollows} className="container-fluid">

            <div  className="row">
                <div className="col h1Profile">
                     <h1 className="h1Profile">Profile</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <img src="images/profilepic.png" className="profileImg" alt=""/>
                </div>

                <div className="col">
                  <span className="username">{user.username}</span>
                </div>

                <div className="col" >
                  <label>
                    <input type="checkbox" id={user.username} onClick={this.addToFollowList} className="buttons" />Follow
                  </label>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <span className="profileCount">{user.followedBy.length}</span>
                    <br></br>
                    <span className="greenText">Followers</span>
                </div>

                <div className="col">
                    <span className="profileCount">{trips.length}</span>
                    <br></br>
                    <span className="greenText">Trips Created</span>
                </div>
            </div>

            <div className="row textCenter">
                <div className="col">
                    <span className="profTripPin">Created Trips</span>
                </div>
            </div>

              <TripListProfiles onLoad={this.checkFollows} trips={trips} />

        </div>
        )
      } else {
        return(
            <div >Loading...</div>
        )
      }
    }
  }


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null
  return{
    trips: state.firestore.ordered.trips,
    user: user,
    auth: state.firebase.auth,
    users: users
  }
}

export default compose(
  connect(mapStateToProps),

  firestoreConnect(props => [

    {collection: 'trips', where: [['authorId', '==', props.match.params.id]] },
    {collection: 'users'}
  ])
)(Profiles);
