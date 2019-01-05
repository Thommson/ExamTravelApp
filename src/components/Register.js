import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signUp } from '../store/actions/authActions'

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
      const { auth, authError} = this.props;
      if(auth.uid) return <Redirect to='/Explore' />
    return (

      <form onSubmit={this.handleSubmit} className="container-fluid green-background">
        <div className="row">
          <div className="col">
            <h1 className="login-title-placement">StudyLife</h1>
          </div>
        </div>
        <div className="row">
          <div className="col login-card">
            <div className="row ">
              <div className="col logo-placement">
                <img src="images/studylife_logo.png" alt="" className="logo"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="login-span-placement">Register</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="username">Username</label><br></br>
                <input type="text" id="username" placeholder="Username" className="width100" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email</label><br></br>
                <input type="text" id="email" placeholder="Email" className="width100" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password">Password</label><br></br>
                <input type="text" id="password" placeholder="Password" className="width100" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <p className="col">
              { authError ? <p>{authError}</p> : null }
              </p>
            </div>

            <div className="row">
              <div className="col">
                <button className="width100">Register</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/Login" className="width100">I already have an account!</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
