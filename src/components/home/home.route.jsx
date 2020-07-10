import React                           from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import HomeComponent from './index';
import ShopComponent from '../shop';

const ShopView = React.lazy(() => import('./../shop/shop.route'));

const HomeRoute = ({history}) => {
  return (
    <div>
        <Route component={HomeComponent} exact path={'/home'}/>
        {/* <Route component={ShopComponent} path={'/home/shop'}/> */}
    </div>
  );
}

export default withRouter(HomeRoute);
