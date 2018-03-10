import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home/main';
import Login from './components/common/login.component';
import App from './components/home';
import PollDetails from './components/home/pollDetails.component';

const AppRoutes = () => (
<div> 
    <Switch>
        <Route exact path="/" component={Login} />
        <Home>
            <Route exact path="/app" component={App} />
            <Route exact path="/app/details/:title" component={PollDetails} />
        </Home>
    </Switch>  
</div>
)

export default AppRoutes;


