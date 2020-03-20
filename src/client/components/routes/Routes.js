import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import Admin from '../admin';
import Contacts from '../contacts';
import Fans from '../fans';
import Main from '../main-page';
import Matches from '../matches';
import News from '../news';


const Routes = () => (
    <Router>
        <AppHeader />
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/matches" exact component={Matches} />
            <Route path="/news" exact component={News} />
            <Route path="/fans" exact component={Fans} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/admin" exact component={Admin} />
        </Switch>
        <AppFooter />
    </Router>
);

export default Routes;