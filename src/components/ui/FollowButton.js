import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';

class FollowButton extends Component {

  checkFollows = (e) => {
      for(let f = 0; f <= this.props.user.followedBy.length; f++){
        alert('load' + f)
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

  const { user } = this.props;
  return (
  <div onLoad={this.checkFollows}>
    <input type="checkbox" id={user.username} onClick={this.addToFollowList} className="buttons" />Follow
  </div>
);
}

}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }

}


export default connect(mapStateToProps)(FollowButton);
