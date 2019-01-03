import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (

      <div className="container-fluid green-background">
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
                <label htmlFor="username">Username</label><br></br>
                <input type="text" id="username" placeholder="Username" className="width100"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password">Password</label><br></br>
                <input type="text" id="password" placeholder="Password" className="width100"/>
              </div>
            </div>
            <div className="row">
              <span className="col">Forgot password?</span>
            </div>
            <div className="row">
              <div className="col">
                <button className="width100">Login</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="width100">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
