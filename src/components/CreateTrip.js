import React, { Component } from 'react';
import ActivitySelector from './ui/ActivitySelector';
import { connect } from 'react-redux'
import { createTrip } from '../store/actions/tripActions';

class CreateTrip extends Component {
  state = {
    country: '',
    city: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTrip(this.state)
  }
  render() {
    return (

      <form onSubmit={this.handleSubmit} className="container-fluid whiteBgCreateTrip">

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
            <input type="text" id="country" placeholder="Country" className="width100 textStyle" onChange={this.handleChange}/>
          </div>
          <div className="col">
            <label htmlFor="city">City</label><br></br>
            <input type="text" id="city" placeholder="City" className="width100 textStyle" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
          <h3 className="col">About the Trip</h3>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="title">Title</label><br></br>

            <input type="text" id="title" placeholder="Title" className="width100 textStyle" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="description">Description</label><br></br>
            <input type="text" id="description" placeholder="Description" className="width100 textStyle" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Select Your To Do's</h3>
        </div>
        <div className="row">
          <div className="col ">
            <button className="createToDoButton">+</button>
            <input type="text" placeholder="Write a To Do" className="textStyle" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
            <h3 className="col">Activity Type</h3>
        </div>
        <ActivitySelector />
        <div className="row">
          <div className="col">
            <button className="width100 submitButtons" onClick={this.postTrip}>Let's Go!</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: (trip) => dispatch(createTrip(trip))
  }
}
export default connect(null, mapDispatchToProps)(CreateTrip);
