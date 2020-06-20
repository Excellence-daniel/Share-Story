import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/global-images/logo-full.png';
import { Button } from '@material-ui/core';

export class SplashScreen extends Component {
	state = {
		showButton: false,
	};

	componentDidMount() {
		const { showButton } = this.state;
		setInterval(() => {
			if (!showButton) {
				this.setState({ showButton: true }, () => {
					console.log('hey there');
				});
			}
		}, 5000);
	}

	render() {
		const { showButton } = this.state;
		console.log({ showButton });
		return (
			<div className="splash-screen">
				<div className="container-fluid">
					<center>
						<img src={Logo} alt="Logo" className="img-fluid" />
					</center>

					{showButton && (
						<Link to="/login">
							<Button color="primary" className="start-button" variant="contained">
								Start
							</Button>
						</Link>
					)}
				</div>
			</div>
		);
	}
}
