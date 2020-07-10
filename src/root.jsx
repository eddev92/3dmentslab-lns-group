import React, { Suspense }                                  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const HomeView = React.lazy(() => import('./components/home/home.route'));
const ShopView = React.lazy(() => import('./components/shop/shop.route'));
const LandingView = React.lazy(() => import('./components/landing/landing.route'));


const Root = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route component={LandingView} path="/"/>
                    {/* <Route component={LandingView} path='/landing'/> */}
                    <Route component={HomeView} path='/home'/>AboutUsComponent
                    <Route component={ShopView} path='/shop'/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Root;

// export default connect(mapStateToProps, mapDispatchToProps)(Root);