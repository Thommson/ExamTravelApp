import React, { Component } from 'react';
import TripCard from './ui/TripCard';

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
    
        <div className="row grayBackground">
            <div className="col">
                 <h1 className="h1Profile">Profile</h1>
            </div>
        </div>

        <div className="row grayBackground">
            <div className="col">
                <img src="images/profilepic.png" className="profileImg" />
            </div>

            <div className="col">
                <span className="username">Timmy73</span>
            </div>

            <div className="col">
                <button className="buttons">Edit Profile</button>
            </div>
        </div>

        <div className="row grayBackground">
            <div className="col">
                <span className="profileCount">1.4K</span>
                <br></br>
                <span className="greenText">Followers</span>
            </div>

            <div className="col">
                <span className="profileCount">138</span>
                <br></br>
                <span className="greenText">Following</span>
            </div>

            <div className="col">
                <span className="profileCount">15</span>  
                <br></br>
                <span className="greenText">Trips Created</span>
            </div>
        </div>

        <div className="row grayBackground textCenter">
            <div className="col">
                <span className="profTripPin">Created Trips</span>
            </div>

            <div className="col">
                <span className="profTripPin">Pinned Trips</span>
            </div>

        </div>
         
         <TripCard />
    
   
    </div>
    );
  }
}

export default Profile;
