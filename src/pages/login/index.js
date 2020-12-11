import React, { Component } from 'react';
import './login.scss';

export class Login extends Component {
  render() {
    return (
      <section className="login-page">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5 form-div">
            <h1>Welcome Back,</h1>
          </div>
        </div>
      </section>
    );
  }
}
