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
                <span className="likeButton">
                    <svg id='Layer_1' className="likePinSvg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M13.4,20.1c-0.8,0.7-1.9,0.7-2.7,0L10.6,20C5.3,15.3,1.9,12.2,2,8.3C2.1,6.6,2.9,4.9,4.3,4C7,2.2,10.2,3,12,5.1	C13.8,3,17,2.2,19.7,4c1.4,1,2.3,2.6,2.3,4.3C22.1,12.2,18.7,15.3,13.4,20.1C13.4,20,13.3,20.1,13.4,20.1z'
                        />
                    </svg>
                    <span>20</span>
                </span>


                <span className="likeButton">
                    <svg id='Layer_1' className="likePinSvg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
                        <path className='st0' d='M150.1,232.7l-67.2,67.9c-3.4,3.3-5.5,7.9-5.5,13c0,10,8.1,18.2,18,18.2h127.4v113.6	c0,12.5,10.2,22.7,22.7,22.7c12.5,0,22.7-10.2,22.7-22.7V331.8h136.5c9.9,0,18-8.2,18-18.2c0-5-2-9.5-5.3-12.8l-67.4-68.1V77.4h13.6	c12.5,0,22.7-10.2,22.7-22.7s-10.2-22.7-22.7-22.7H136.4c-12.5,0-22.7,10.2-22.7,22.7c0,12.5,10.2,22.7,22.7,22.7h13.6V232.7z M231.8,95.5v118.1c0,10-8.2,18.2-18.2,18.2c-10,0-18.2-8.2-18.2-18.2V95.5c0-10,8.2-18.2,18.2-18.2	C223.7,77.4,231.8,85.6,231.8,95.5z'
                        />
                    </svg>
                    <span>20</span>
                </span>

            </div>

            <div className="col">
                <span className="usernameItalic">Timmy73</span>
            </div>

            <div className="col">
                <button className="buttons">
                <div className="update">Update</div>
                <svg id='Layer_1' className="svgButton" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
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
