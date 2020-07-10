import React, { Suspense }                                  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Root from './root';
// import LandingComponent from './components/landing';

// const HomeView = React.lazy(() => import('./components/home'));
const LandingView = React.lazy(() => import('./components/landing'));
const ShopView = React.lazy(() => import('./components/shop'));

const HomeView = React.lazy(() => import('./components/home/home.route'));

function App(props) {
  return (
    <Root />
    );
}

export default App;
