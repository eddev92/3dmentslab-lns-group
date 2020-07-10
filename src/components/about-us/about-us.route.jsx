import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import AboutUsComponent from './index';


const AboutUsRoute = ({history}) => {
  return (
    <div>
        <Route component={AboutUsComponent} path={'/nosotros'}/>
    </div>
  );
}

export default withRouter(AboutUsRoute);
