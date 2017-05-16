import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// include css files
require('./style/index.scss');
// import Components
import Home from './pages/Home';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
  </Router>,
  document.getElementById('app')
);