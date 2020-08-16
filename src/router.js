import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages/home';

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
};

export default AppRoutes;
