/**
 * Created by huangling on 19/05/2017.
 */
/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import {
    Home,
    Feature,
    About,
    Partner,
    Library,
    Edit,
    JoinUs,
    JobDetail,
    Update,
    SubmitForm,
    SubmitSuccess
} from '../src/js/containers/index';

import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'

const routes = [{
    path: '/home', component: Home },{
    path: '/feature', component: Feature },{
    path: '/about', component: About },{
    path: '/library', component: Library },{
    path: '/edit', component: Edit },{
    path: '/join', component: JoinUs },{
    path: '/jobDetail', component: JobDetail },{
    path: '/updateInfo', component: Update },{
    path: '/form', component: SubmitForm },{
    path: '/formSubmitted', component: SubmitSuccess },{
    path: '/partner', component: Partner
}];

const ClientApp = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        {routes.map((route, index) => <Route key={index} {...route}/>)}
        </BrowserRouter>
);

const RedirectWithStatus = ({from, to, status}) => (
    <Route render={({staticContext}) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) {
            staticContext.status = status;
        }
        return <Redirect from={from} to={to}/>
    }}/>
);

const ServerApp = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        {routes.map((route, index) => <Route key={index} {...route}/>)}
        <RedirectWithStatus
            status={301}
            from="/library/:id"
            to="/library"
        />
        <RedirectWithStatus
            status={302}
            from="/"
            to="/home"
        />
    </Switch>
);

export {
    ClientApp,
    ServerApp,
    routes
};