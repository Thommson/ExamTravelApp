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
                <button className="buttons">
                <div class="update">Update</div>
                <svg id='Layer_1' class="svgButton" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M3,17.5v3C3,20.8,3.2,21,3.5,21h3c0.1,0,0.3,0,0.3-0.1L17.8,9.9l-3.8-3.8L3.2,17.1C3.1,17.2,3,17.3,3,17.5z M20.7,7	c0.4-0.4,0.4-1,0-1.4l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0l-1.8,1.8l3.8,3.8C18.9,8.9,20.7,7,20.7,7z'
                    />
                </svg>
                
                </button>

                
            </div>
        </div>
    </div>
    );
  }
}

export default TripCard;
