import React, { Component } from 'react';

class AlbumCard extends Component {
  render() {
    return (
        <div className="card">
            <div className="row">
                <div className="col">
                    <img src="images/norway.jpg" className="cardImg" />
                </div>
            </div>

            <div className="row cardDescrip">
                <div className="col">
                    <span className="cardLocation">Trolltunga, Norway</span>
                    <p className="cardDescr">The hike was quite difficult but the new at the top made it all worth it. </p>
                </div>
            </div>
        </div>      

    );
  }
}

export default AlbumCard;
