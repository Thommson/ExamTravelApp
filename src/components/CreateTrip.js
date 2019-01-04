import React, { Component } from 'react';
import ActivitySelector from './ui/ActivitySelector'
class CreateTrip extends Component {
  render() {
    return (
      <div className="container-fluid whiteBgCreateTrip">
        <div className="row">
          <div className="col h1Profile">
          <h1 className="h1Profile">Create Trip</h1>
          </div>
        </div>
        <div className="row">
          <h3 className="col">Select Location</h3>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="country">Country</label><br></br>
            <input type="text" id="country" placeholder="Country" className="width100 textStyle"/>
          </div>
          <div className="col">
            <label htmlFor="city">City</label><br></br>
            <input type="text" id="city" placeholder="City" className="width100 textStyle"/>
          </div>
        </div>
        <div className="row">
          <h3 className="col">About the Trip</h3>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="title">Title</label><br></br>
            <input type="text" id="title" placeholder="Title" className="width100 textStyle"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="description">Description</label><br></br>
            <input type="text" id="description" placeholder="Description" className="width100 textStyle"/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Select Your To Do's</h3>
        </div>
        <div className="row">
          <div className="col createToDo">
            <button className="createToDoButton">+</button>
            <input type="text" placeholder="Write a To Do" className="textStyle"/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Activity Type</h3>
        </div>
        <ActivitySelector />
        <div className="row">
          <div className="col">
            <button className="width100 submitButtons">Let's Go!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTrip;
