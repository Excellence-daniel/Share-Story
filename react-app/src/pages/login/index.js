import React, { Component } from 'react';
import Logo from '../../assets/global-images/logo-full.png';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import GoogleIcon from './images/google.svg';
import FacebookIcon from './images/facebook.svg';
import './login.scss';

class Login extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="login-page">
					<div className="col-12">
						<center>
							<img src={Logo} alt="logo" className="img-fluid logo-image" />
						</center>
					</div>
					<div className="login-options">
						<center>
							<h6>Login With</h6>
						</center>
						<div className="login-options__buttons">
							<Button className="" variant="outlined">
								<img src={GoogleIcon} alt="google-icon" width={20} />
							</Button>
							<Button className="" variant="outlined">
								<img src={FacebookIcon} alt="facebook-icon" width={25} />
							</Button>
						</div>
						<center>
							<h6>or</h6>
						</center>
					</div>
					<div className="text-fields">
						<TextField id="standard-basic" label="Email/Phone Number" />
						<TextField id="standard-basic" label="Password" />
					</div>
					<center>
						<Button variant="contained" className="login-button">
							Login
						</Button>
						<h6 className="bottom-text">
							You don't have an account?{' '}
							<Link>
								<span>Sign Up!</span>
							</Link>
						</h6>
					</center>
				</div>
			</div>
		);
	}
}

export default Login;
