import React, { Component } from 'react';

import TripList from './ui/TripList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Explore extends Component {
  state = {
    activityType: ''
  }
  handleTrendingLink = (e) => {
    e.preventDefault();
    this.props.history.push('/ExploreTrending');
    window.location.reload();
  }
  handleRadio = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  render() {
    const { trips, auth } = this.props;
    if(!auth.uid) return <Redirect to='/Login' />
      return (
        <div className="container-fluid">
          <div className="row">
              <div className="col">
                   <h1 className="h1Explore">Explore</h1>
              </div>

              <div className="col">

              </div>

          </div>

          <div className="row">
              <div className="col">
                   <h1 className="h2Explore">Activities</h1>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <p className="activities-para">Select an activity to see the trips that you want!</p>
              </div>
          </div>
          <div className="row whiteBG">
            <label className="col containerLabel">
            <input type="radio" name="activityType" value="sports" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconChecked" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M20.6,14.9l0.7-0.7c0.4-0.4,0.4-1,0-1.4l0,0c-0.4-0.4-1-0.4-1.4,0L17,15.6L8.4,7l2.9-2.9c0.4-0.4,0.4-1,0-1.4l0,0	c-0.4-0.4-1-0.4-1.4,0L9.1,3.4L8.4,2.7C8,2.3,7.4,2.3,7,2.7L5.6,4.1L4.9,3.4C4.5,3,3.8,3,3.4,3.4s-0.4,1,0,1.4l0.7,0.7L2.7,7	c-0.4,0.4-0.4,1,0,1.4l0.7,0.7L2.7,9.9c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0L7,8.4l8.6,8.6l-2.9,2.9c-0.4,0.4-0.4,1,0,1.4	l0,0c0.4,0.4,1,0.4,1.4,0l0.7-0.7l0.7,0.7c0.4,0.4,1,0.4,1.4,0l1.4-1.4l0.7,0.7c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-0.7-0.7	l1.4-1.4c0.4-0.4,0.4-1,0-1.4C21.3,15.6,20.6,14.9,20.6,14.9z'
                />
              </svg>
             <div className="checkboxFontStyle">Sports</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" name="activityType" value="food" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconChecked" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M8.1,13.3l2.8-2.8L4.7,4.3C4.3,3.9,3.4,4,3.1,4.6C2.4,6.1,2.7,7.9,3.9,9.2L8.1,13.3z M14.9,11.5c1.5,0.7,3.7,0.2,5.3-1.4	C22.1,8.2,22.4,5.5,21,4c-1.5-1.5-4.2-1.1-6.1,0.8c-1.6,1.6-2.1,3.7-1.4,5.3l-9.1,9c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l6.2-6.2	l6.2,6.2c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L13.4,13C13.4,13,14.9,11.5,14.9,11.5z'
                />
              </svg>
              <div className="checkboxFontStyle">Food</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" name="activityType" value="culture" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconChecked" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M12,3c-5,0-9,4-9,9s4,9,9,9c0.8,0,1.5-0.7,1.5-1.5c0-0.4-0.1-0.7-0.4-1c-0.2-0.3-0.4-0.6-0.4-1c0-0.8,0.7-1.5,1.5-1.5H16	c2.8,0,5-2.2,5-5C21,6.6,17,3,12,3z M6.5,12C5.7,12,5,11.3,5,10.5S5.7,9,6.5,9S8,9.7,8,10.5S7.3,12,6.5,12z M9.5,8	C8.7,8,8,7.3,8,6.5S8.7,5,9.5,5S11,5.7,11,6.5S10.3,8,9.5,8z M14.5,8C13.7,8,13,7.3,13,6.5S13.7,5,14.5,5S16,5.7,16,6.5	S15.3,8,14.5,8z M17.5,12c-0.8,0-1.5-0.7-1.5-1.5S16.7,9,17.5,9S19,9.7,19,10.5S18.3,12,17.5,12z'
                />
              </svg>
              <div className="checkboxFontStyle">Culture</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" name="activityType" value="nightlife" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconChecked" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M21,4.4C21,3.6,20.4,3,19.5,3H4.4C3.7,3,3,3.7,3,4.4c0,0.3,0.1,0.7,0.4,1L11,14v5H7c-0.6,0-1,0.5-1,1s0.4,1,1,1h10	c0.5,0,1-0.5,1-1s-0.5-1-1-1h-4v-5l7.6-8.6C20.9,5.1,21,4.8,21,4.4z M7.4,7L5.7,5h12.7l-1.8,2H7.4z'
                />
              </svg>
              <div className="checkboxFontStyle">Nightlife</div>
            </label>

            <label className="col containerLabel">
            <input type="radio" name="activityType" value="nature" onChange={this.handleRadio} />
              <svg id='Layer_1' className="iconChecked" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M13.2,7.1L10.2,11l2.2,3c0.3,0.4,0.2,1.1-0.2,1.4s-1.1,0.2-1.4-0.2c-1.1-1.4-2.3-3.1-3.1-4.1c-0.4-0.5-1.2-0.5-1.6,0l-4,5.3	C1.7,17.1,2.2,18,3,18h18c0.8,0,1.3-0.9,0.8-1.6l-7-9.3C14.4,6.5,13.6,6.5,13.2,7.1z'
                />
              </svg>
              <div className="checkboxFontStyle">Nature</div>
            </label>
          </div>

          <div className="row textCenter">
            <div className="col">
                <span onClick={this.handleTrendingLink} className="profTripPin">Trending</span>
            </div>
            <div className="col">
                <span className="profTripPin activeTab">Recent</span>
            </div>
          </div>
          <TripList trips={trips} activityType={this.state.activityType}/>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
  console.log(state)
  return{
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props =>[
    { collection: 'trips', orderBy: ['createdAt', 'desc']}
  ])
)(Explore)
