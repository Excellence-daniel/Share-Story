import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SplashScreen } from './pages/splash/index';
import Media from 'react-media';
import { BREAKPOINT_SMALL } from './assets/partials/css-constants';
import NotForDesktop from './components/not-desktop';

function AppRouter() {
	return (
		<Media query={{ maxWidth: BREAKPOINT_SMALL }}>{(matches) => (matches ? <Routes /> : <NotForDesktop />)}</Media>
	);
}

const Routes = () => {
	return (
		<Router>
			<Route exact path="/" component={SplashScreen} />
		</Router>
	);
};

export default AppRouter;
