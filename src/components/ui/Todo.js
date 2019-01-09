import React, { Component } from 'react';
import { connect } from 'react-redux'

class Todo extends Component {

  render(){
    const { auth } = this.props;
    return (

    )
  }

}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }

}

export default connect(mapStateToProps)(Todo);
