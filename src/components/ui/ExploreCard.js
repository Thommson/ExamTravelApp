import React, { Component } from 'react';

const ExploreCard = ({trip}) => {
    return (
      <div className="card">
        <div className="row">
            <div className="col">
                <img src="images/norway.jpg" className="cardImg" alt=""/>
            </div>
        </div>
        <div className="row">
          <div className="col card-margin">
            <div className="row card-description-margin">
                <div className="col-10">
                    <span className="countryVisited">{trip.country}, {trip.city}</span>
                    <p>{trip.description}</p>
                </div>

                <div className="col-2">
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
                <div className="col text-align-right">
                    <span className="usernameItalic">{trip.username}</span>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default ExploreCard;
