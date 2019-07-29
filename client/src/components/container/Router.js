import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Main from '../presentational/Main';
import Projects from '../presentational/Projects';
import Contact from '../presentational/Contact';

const Router = () => (
    <Switch>
        <Route exact path='/Main' component={Main} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />
        <Redirect to='/Main' />
    </Switch>
);

export default Router;