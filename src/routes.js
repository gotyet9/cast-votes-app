import React from 'react';
import {Switch,Route} from 'react-router-dom';
import App from './components/home';
import Login from './components/common/login.component';

const AppRoutes = () => (
<div> 
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={App} />
    </Switch>  
</div>
)

export default AppRoutes;


