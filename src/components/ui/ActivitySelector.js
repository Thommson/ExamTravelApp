import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ActivitySelector extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <input type="checkbox" id="sports"/><br></br>
          <label htmlFor="sports">Sports</label>
        </div>
        <div className="col">
          <input type="checkbox" id="food"/><br></br>
          <label htmlFor="food">Food</label>
        </div>
        <div className="col">
          <input type="checkbox" id="culture"/><br></br>
          <label htmlFor="culture">Culture</label>
        </div>
        <div className="col">
          <input type="checkbox" id="nightlife"/><br></br>
          <label htmlFor="nightlife">Nightlife</label>
        </div>
        <div className="col">
          <input type="checkbox" id="nature"/><br></br>
          <label htmlFor="nature">Nature</label>
        </div>
      </div>
    );
  }
}

export default ActivitySelector;
