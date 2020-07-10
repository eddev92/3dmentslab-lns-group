import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import HomeComponent from './index';
import LandingComponent from './index';

const LandingRoute = ({history}) => {
  return (
    <div>
        {/* <Route component={LandingComponent} exact path={'/landing/'}/> */}
        <Route component={LandingComponent} path={'/landing'}/>
    </div>
  );
}

export default withRouter(LandingRoute);
