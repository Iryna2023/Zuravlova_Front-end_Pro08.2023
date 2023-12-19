import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './Users';
import Albums from './Albums';
import Photos from './Photos';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Users} />
      <Route path="/user/:userId/albums" component={Albums} />
      <Route path="/album/:albumId/photos" component={Photos} />
    </div>
  </Router>
);

export default App;