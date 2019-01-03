import React, { Component } from 'react';
import ActivitySelector from './ui/ActivitySelector'
class CreateTrip extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col">Create Trip</h1>
        </div>
        <div className="row">
          <h3 className="col">Select Location</h3>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="country">Country</label><br></br>
            <input type="text" id="country" placeholder="Country"/>
          </div>
          <div className="col">
            <label htmlFor="city">City</label><br></br>
            <input type="text" id="city" placeholder="City"/>
          </div>
        </div>
        <div className="row">
          <h3 className="col">About the Trip</h3>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="title">Title</label><br></br>
            <input type="text" id="title" placeholder="Title" className="Width100"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="description">Description</label><br></br>
            <input type="text" id="description" placeholder="Description" className="Width100"/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Select Your To Do's</h3>
        </div>
        <div className="row">
          <div className="col">
            <button>Add To Do</button>
            <input type="text" placeholder="Write a To Do"/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Activity Type</h3>
        </div>
        <ActivitySelector />
        <div className="row">
          <button className="col">Let's Go!</button>
        </div>
      </div>
    );
  }
}

export default CreateTrip;
