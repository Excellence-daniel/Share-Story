import React, { Component } from 'react';
import Logo from '../../assets/global-images/logo-full.png';
import './signup.scss';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="signup-view">
					<div className="col-12">
						<center>
							<img src={Logo} alt="logo" className="img-fluid logo-image" />
						</center>
					</div>
					<div className="form-section">
						<h6>Create An Account</h6>
						<TextField id="standard-basic" label="Full Name" />
						<TextField id="standard-basic" label="Create a Username" />
						<TextField id="standard-basic" label="Phone Number" />
						<TextField id="standard-basic" label="Email" />
						<TextField id="standard-basic" label="Password" />
						<Button variant="contained" className="login-button">
							Register
						</Button>

						<h6 className="bottom-text">
							Oh, you have an account?{' '}
							<Link to="/login">
								<span>Log In</span>
							</Link>
						</h6>
					</div>
				</div>
			</div>
		);
	}
}
