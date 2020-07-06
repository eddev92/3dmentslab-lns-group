import React, { Suspense }                                  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import LandingComponent from './components/landing';

const HomeView = React.lazy(() => import('./components/home'));
const LandingView = React.lazy(() => import('./components/landing'));
const ShopView = React.lazy(() => import('./components/shop'));

function App() {
  return (
    // <LandingComponent />
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
        <Switch>
            <Route component={LandingView} path='/landing'/>
            <Route component={HomeView} path='/home'/>
            <Route component={ShopView} path='/shop'/>
        </Switch>
    </Router>
    </Suspense>
    );
}

export default App;
