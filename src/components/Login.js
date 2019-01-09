import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
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
    this.props.signIn(this.state)
  }
  render() {
      const { authError, auth } = this.props;
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
                <h3 className="login-span-placement">Login</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email</label><br></br>
                <input type="text" id="email" placeholder="Email" className="width100 textStyle" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password">Password</label><br></br>
                <input type="text" id="password" placeholder="Password" className="width100 textStyle" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <p className="col">
              { authError ? <p>{authError}</p> : null }
              </p>
            </div>
            <div className="row">
              <div className="col">
                <button className="width100 submitButtons loginButton">Login</button>
              </div>
            </div>
            <div className="row no-account">
              <div className="col">
                <Link to="/Register" className="width100">I don't have an account...</Link>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
