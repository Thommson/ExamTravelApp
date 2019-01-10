import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

class UpdateTrip extends Component {
  state = {
    country: this.props.trip.country,
    city: this.props.trip.city,
    title: this.props.trip.title,
    description: this.props.trip.description,
    activityType: this.props.trip.activityType,
    todo1: this.props.trip.todo1,
    todo2: this.props.trip.todo2,
    todo3: this.props.trip.todo3,
    todo4: this.props.trip.todo4,
    todo5: this.props.trip.todo5
  }
  loadActivity = (e) => {
    if(this.props.trip.activityType === 'sports'){
      document.getElementById('activityType1').checked = true;
    }
    if(this.props.trip.activityType === 'food'){
      document.getElementById('activityType2').checked = true;
    }
    if(this.props.trip.activityType === 'culture'){
      document.getElementById('activityType3').checked = true;
    }
    if(this.props.trip.activityType === 'nightlife'){
      document.getElementById('activityType4').checked = true;
    }
    if(this.props.trip.activityType === 'nature'){
      document.getElementById('activityType5').checked = true;
    }
  }
  loadTodos = (e) => {
    if(this.props.trip.todo1.length > 3){
      document.getElementById('todoRow1').style.display = 'block';
    }
    if(this.props.trip.todo2.length > 3){
      document.getElementById('todoRow2').style.display = 'block';
    }
    if(this.props.trip.todo3.length > 3){
      document.getElementById('todoRow3').style.display = 'block';
    }
    if(this.props.trip.todo4.length > 3){
      document.getElementById('todoRow4').style.display = 'block';
    }
    if(this.props.trip.todo5.length > 3){
      document.getElementById('todoRow5').style.display = 'block';
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleRadio = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUpdate = (e) => {
    firebase.firestore().collection('trips').doc(this.props.match.params.id).update({
      country: this.state.country,
      city: this.state.city,
      title: this.state.title,
      description: this.state.description,
      activityType: this.state.activityType,
      tips: this.props.trip.tips,
      todo1: this.state.todo1,
      todo2: this.state.todo2,
      todo3: this.state.todo3,
      todo4: this.state.todo4,
      todo5: this.state.todo5
    })
    document.getElementById('exit').style.display = 'block';
  }
  exitUpdate = (e) => {
    this.props.history.push('/Explore')
  }
  addTodo2 = (e) => {
    document.getElementById('todoRow2').style.display = 'block';
  }
  addTodo3 = (e) => {
    document.getElementById('todoRow3').style.display = 'block';
  }
  addTodo4 = (e) => {
    document.getElementById('todoRow4').style.display = 'block';
  }
  addTodo5 = (e) => {
    document.getElementById('todoRow5').style.display = 'block';
  }

  render() {
    const { auth, trip } = this.props;
    if(!auth.uid) return <Redirect to='/Login' />
    console.log(this.props)
    if(trip){
      return (

        <div onMouseEnter={this.loadActivity} onMouseOver={this.loadTodos} className="container-fluid">

          <div className="row">
            <div className="col">
            <h1 className="h1Profile">UpdateTrip</h1>
            </div>
          </div>
          <div className="row">
            <h3 className="col">Location</h3>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="country">Country</label><br></br>
              <input type="text" id="country" placeholder={trip.country} className="width100 textStyle" onChange={this.handleChange}/>
            </div>
            <div className="col">
              <label htmlFor="city">City</label><br></br>
              <input type="text" id="city" placeholder={trip.city} className="width100 textStyle" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <h3 className="col">About the Trip</h3>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="title">Title</label><br></br>

              <input type="text" id="title" placeholder={trip.title} className="width100 textStyle" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="description">Description</label><br></br>
              <input type="text" id="description" placeholder={trip.description} className="width100 textStyle" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="description">Tips</label><br></br>
              <input type="text" id="tips" placeholder={trip.tips} className="width100 textStyle" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
              <h3 className="col">Select Your To Do's</h3>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>TOdo's go here</p>
                </div>
              </div>
              <div  id="todoRow1" className="row">
                <div className="col ">
                  <button onClick={this.addTodo2} id="addTodo1" type="button" className="createToDoButton">+</button>
                  <input type="text" id="todo1" placeholder={trip.todo1} className="textStyle" onChange={this.handleChange}/>
                </div>
              </div>
              <div id="todoRow2" className="row">
                <div className="col ">
                  <button onClick={this.addTodo3} id="addTodo2" type="button" className="createToDoButton">+</button>
                  <input type="text" id="todo2" placeholder={trip.todo2} className="textStyle" onChange={this.handleChange}/>
                </div>
              </div>
              <div  id="todoRow3" className="row">
                <div className="col ">
                  <button onClick={this.addTodo4} id="addTodo3" type="button" className="createToDoButton">+</button>
                  <input type="text" id="todo3" placeholder={trip.todo3} className="textStyle" onChange={this.handleChange}/>
                </div>
              </div>
              <div id="todoRow4" className="row">
                <div className="col ">
                  <button onClick={this.addTodo5} id="addTodo4" type="button" className="createToDoButton">+</button>
                  <input type="text" id="todo4" placeholder={trip.todo4} className="textStyle" onChange={this.handleChange}/>
                </div>
              </div>
              <div id="todoRow5" className="row">
                <div className="col ">
                  <button type="button" id="addTodo5" className="createToDoButton">+</button>
                  <input type="text" id="todo5" placeholder={trip.todo5} className="textStyle" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <h3 className="col">Activity Type</h3>
          </div>
          <div className="row">
            <p className="col">Select one activity type that reflects your trip plans the best!</p>
          </div>
          <div className="row whiteBG">
            <label className="col containerLabel">
            <input type="radio" id="activityType1" name="activityType" value="sports" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconCheckedActivity" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M20.6,14.9l0.7-0.7c0.4-0.4,0.4-1,0-1.4l0,0c-0.4-0.4-1-0.4-1.4,0L17,15.6L8.4,7l2.9-2.9c0.4-0.4,0.4-1,0-1.4l0,0	c-0.4-0.4-1-0.4-1.4,0L9.1,3.4L8.4,2.7C8,2.3,7.4,2.3,7,2.7L5.6,4.1L4.9,3.4C4.5,3,3.8,3,3.4,3.4s-0.4,1,0,1.4l0.7,0.7L2.7,7	c-0.4,0.4-0.4,1,0,1.4l0.7,0.7L2.7,9.9c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0L7,8.4l8.6,8.6l-2.9,2.9c-0.4,0.4-0.4,1,0,1.4	l0,0c0.4,0.4,1,0.4,1.4,0l0.7-0.7l0.7,0.7c0.4,0.4,1,0.4,1.4,0l1.4-1.4l0.7,0.7c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-0.7-0.7	l1.4-1.4c0.4-0.4,0.4-1,0-1.4C21.3,15.6,20.6,14.9,20.6,14.9z'
                />
              </svg>
             <div className="checkboxFontStyle">Sports</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" id="activityType2"  name="activityType" value="food" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconCheckedActivity" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M8.1,13.3l2.8-2.8L4.7,4.3C4.3,3.9,3.4,4,3.1,4.6C2.4,6.1,2.7,7.9,3.9,9.2L8.1,13.3z M14.9,11.5c1.5,0.7,3.7,0.2,5.3-1.4	C22.1,8.2,22.4,5.5,21,4c-1.5-1.5-4.2-1.1-6.1,0.8c-1.6,1.6-2.1,3.7-1.4,5.3l-9.1,9c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l6.2-6.2	l6.2,6.2c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L13.4,13C13.4,13,14.9,11.5,14.9,11.5z'
                />
              </svg>
              <div className="checkboxFontStyle">Food</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" id="activityType3" name="activityType" value="culture" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconCheckedActivity" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M12,3c-5,0-9,4-9,9s4,9,9,9c0.8,0,1.5-0.7,1.5-1.5c0-0.4-0.1-0.7-0.4-1c-0.2-0.3-0.4-0.6-0.4-1c0-0.8,0.7-1.5,1.5-1.5H16	c2.8,0,5-2.2,5-5C21,6.6,17,3,12,3z M6.5,12C5.7,12,5,11.3,5,10.5S5.7,9,6.5,9S8,9.7,8,10.5S7.3,12,6.5,12z M9.5,8	C8.7,8,8,7.3,8,6.5S8.7,5,9.5,5S11,5.7,11,6.5S10.3,8,9.5,8z M14.5,8C13.7,8,13,7.3,13,6.5S13.7,5,14.5,5S16,5.7,16,6.5	S15.3,8,14.5,8z M17.5,12c-0.8,0-1.5-0.7-1.5-1.5S16.7,9,17.5,9S19,9.7,19,10.5S18.3,12,17.5,12z'
                />
              </svg>
              <div className="checkboxFontStyle">Culture</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" id="activityType4" name="activityType" value="nightlife" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconCheckedActivity" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M21,4.4C21,3.6,20.4,3,19.5,3H4.4C3.7,3,3,3.7,3,4.4c0,0.3,0.1,0.7,0.4,1L11,14v5H7c-0.6,0-1,0.5-1,1s0.4,1,1,1h10	c0.5,0,1-0.5,1-1s-0.5-1-1-1h-4v-5l7.6-8.6C20.9,5.1,21,4.8,21,4.4z M7.4,7L5.7,5h12.7l-1.8,2H7.4z'
                />
              </svg>
              <div className="checkboxFontStyle">Nightlife</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" id="activityType5" name="activityType" value="nature" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconCheckedActivity" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M13.2,7.1L10.2,11l2.2,3c0.3,0.4,0.2,1.1-0.2,1.4s-1.1,0.2-1.4-0.2c-1.1-1.4-2.3-3.1-3.1-4.1c-0.4-0.5-1.2-0.5-1.6,0l-4,5.3	C1.7,17.1,2.2,18,3,18h18c0.8,0,1.3-0.9,0.8-1.6l-7-9.3C14.4,6.5,13.6,6.5,13.2,7.1z'
                />
              </svg>
              <div className="checkboxFontStyle">Nature</div>
            </label>
          </div>
          <div className="row">
            <div className="col">
              <button className="width100 submitButtons" onClick={this.handleUpdate}>Save!</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button id="exit" className="width100 submitButtons" onClick={this.exitUpdate}>Done</button>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>Loading...</div>
      )
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const trips = state.firestore.data.trips;
  const trip = trips ? trips[id] : null
  return {
    trip: trip,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'trips'}
  ])
)(UpdateTrip);
