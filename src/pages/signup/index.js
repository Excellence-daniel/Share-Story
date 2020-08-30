import React, { Component } from 'react';
import axios from 'axios';
import './signup.scss';

export class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
  };

  sendEmail = async () => {
    console.log('send email now');
    // const url = 'http://localhost:4040/send-email';
    // const query = await axios.post(url, { email: this.state.email });
    // console.log({ query });
  };

  handleSignUp = async () => {
    try {
      const { firstName, lastName, email, mobileNumber, password } = this.state;
      if (!firstName || !lastName || !email || !mobileNumber || !password) {
        window.alert('Fill in all the boxes');
      } else {
        console.log('all done');
        const name = firstName + ' ' + lastName;
        await this.sendEmail(email, name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="register">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 side-bar"></div>
            <div className="col-md-8 col-sm-12 form-portion">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 col-sm-12 form-side">
                  <h1>Hello there.</h1>
                  <div className="forms-inputs">
                    <div className="row">
                      <p className="col-6">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          name="firstName"
                          onChange={this.handleInput}
                        />
                      </p>{' '}
                      <p className="col-6">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          name="lastName"
                          onChange={this.handleInput}
                        />
                      </p>
                      <p className="col-12">
                        <input
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          onChange={this.handleInput}
                        />
                      </p>
                      <p className="col-12">
                        <input
                          className="form-control"
                          placeholder="Mobile Number"
                          name="mobileNumber"
                          onChange={this.handleInput}
                        />
                      </p>
                      <p className="col-12">
                        <input
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          type="password"
                          onChange={this.handleInput}
                        />
                      </p>{' '}
                    </div>
                    <center>
                      <button
                        className="btn btn-success signup-button"
                        onClick={this.handleSignUp}
                      >
                        Register
                      </button>
                      <p className="not-logged-in">
                        Have an account? <span> Log In</span>
                      </p>
                    </center>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
