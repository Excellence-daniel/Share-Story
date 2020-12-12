import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withSnackbar } from 'notistack';
// import axios from 'axios';
import './signup.scss';
// import { setUser } from '../../utils';
import { getServerUrl } from '../../utils/dataservice';

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    loading: false,
    signUpSuccess: false,
  };

  handleSignUp = async () => {
    try {
      getServerUrl();
      // const { firstname, lastname, email, phonenumber, password } = this.state;
      // if (!firstname || !lastname || !email || !phonenumber || !password) {
      //   this.props.enqueueSnackbar('Fill in all the boxes');
      // } else {
      //   const user = await axios.post(
      //     'http://localhost:4020/register',
      //     this.state,
      //   );
      //   setUser(user);
      //   this.setState({ signUpSuccess: true });
      // }
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
            <div className="col-md-4 side-bar">
              <h1 className="s-logo">S</h1>
              <h2 className="app-name">Share Story</h2>
              <div className="about-us">
                <b>SHARE STORY</b> allows you as a user to share your stories
                amongst other users and friends. It also gives the priviledge of
                publishing your stories.
              </div>
              <center>
                <h5 className="copyright">
                  &copy; Copyright {new Date().getFullYear()} Inc.
                </h5>
              </center>
            </div>
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
                          name="firstname"
                          onChange={this.handleInput}
                        />
                      </p>
                      <p className="col-6">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          name="lastname"
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
                          name="phonenumber"
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
                        Have an account? <NavLink to="/login"> LOG IN </NavLink>
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

export default withSnackbar(Register);
