import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Register } from './pages/signup';

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} exact />
      <Route path="/register" component={Register} exact />
    </Router>
  );
};

export default AppRoutes;
