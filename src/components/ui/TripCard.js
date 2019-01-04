import React, { Component } from 'react';


class TripCard extends Component {
  render() {
    return (
        <div className="card">
        <div className="row">
            <div className="col">
                <img src="images/norway.jpg" className="cardImg" alt=""/>
            </div>
        </div>

        <div className="row cardDescrip">
            <div className="col-10 locationDescr">
                <span className="countryVisited">Bergen, Norway</span>
                <p>Hiked a mountain and saw beautiful nature. </p>
            </div>
            <div className="col-2 flagImgPadding">
                <img src="images/flag.png" className="flagImgTrip" alt=""/>
            </div>
        </div>

        <div className="row cardLikes">
            <div className="col-m">
                <span className="likeButton likeB">Lik</span>
                <span>20</span>
                <span className="likeButton">Pin</span>
                <span>20</span>
            </div>

            <div className="col">
                <span className="usernameItalic">Timmy73</span>
            </div>

            <div className="col">
                <button className="buttons">Update</button>
            </div>
        </div>
    </div>
    );
  }
}

export default TripCard;
