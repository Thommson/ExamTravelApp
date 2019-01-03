import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ActivitySelector extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <input type="checkbox"/>
        </div>
        <div className="col">
          <input type="checkbox"/>
        </div>
        <div className="col">
          <input type="checkbox"/>
        </div>
        <div className="col">
          <input type="checkbox"/>
        </div>
        <div className="col">
          <input type="checkbox"/>
        </div>
      </div>
    );
  }
}

export default ActivitySelector;
