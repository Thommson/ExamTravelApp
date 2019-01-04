import React, { Component } from 'react';

const ExploreCard = ({trip}) => {
    return (
      <div className="card">
        <div className="row">
            <div className="col">
                <img src="images/norway.jpg" className="cardImg" alt=""/>
            </div>
        </div>

        <div className="row cardDescrip">
            <div className="col-m">
                <span className="countryVisited">{trip.country}{trip.city}</span>
                <p>Hiked a mountain and saw beautiful nature. </p>
            </div>

            <div className="col">
                <img src="images/flag.png" className="flagImg" alt=""/>
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
                <span className="cardExploreViews">264 Views</span>
            </div>

            <div className="col">
                <span className="usernameItalic">Timmy73</span>
            </div>
        </div>
    </div>
    )
}

export default ExploreCard;
