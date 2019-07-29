import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Main from '../presentational/Main';
import Projects from '../presentational/Projects';
import Contact from '../presentational/Contact';

const Router = () => (
    <Switch>
        <Route exact path='/Portfolio/Main' component={Main} />
        <Route exact path='/Portfolio/Projects' component={Projects} />
        <Route exact path='/Portfolio/Contact' component={Contact} />
        <Redirect to='/Portfolio/Main' />
    </Switch>
);

export default Router;