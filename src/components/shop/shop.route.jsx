import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import ShopComponent from './index';

const ShopRoute = ({history}) => {
  return (
    <div>
        <Route component={ShopComponent} exact path={'/shop'}/>
    </div>
  );
}

export default withRouter(ShopRoute);
