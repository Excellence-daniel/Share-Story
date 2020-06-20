import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SplashScreen } from './pages/splash/index';
import Media from 'react-media';
import { BREAKPOINT_SMALL } from './assets/partials/css-constants';
import NotForDesktop from './components/not-desktop';
import Login from './pages/login';
import SignUp from './pages/signup';

function AppRouter() {
	return (
		<Media query={{ maxWidth: BREAKPOINT_SMALL }}>{(matches) => (matches ? <Routes /> : <NotForDesktop />)}</Media>
	);
}

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={SplashScreen} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={SignUp} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
