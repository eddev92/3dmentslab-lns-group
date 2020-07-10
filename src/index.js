import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomeComponent from './components/home';
import LandingComponent from './components/landing';
import ShopComponent from './components/shop';
import AboutUsComponent from './components/about-us';

const routing = (
  <Router>
      <Route path="/" exact component={LandingComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/shop" component={ShopComponent} />
      <Route path="/nosotros" component={AboutUsComponent} />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
