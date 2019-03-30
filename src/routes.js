import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './components/Home';
import ToDoDetails from './components/ToDoDetails';

const routes = (
    <Switch>
        <Route path="/details/:id" component={ToDoDetails} />
        {/* <Route path="/details/" component={ToDoDetails} /> */}
        <Route path="/active" component={Home} />
        <Route path="/unstarted" component={Home} />
        <Route path="/ongoing" component={Home} />
        <Route path="/revising" component={Home} />
        <Route path="/done" component={Home} />
        <Route exact path="/" component={Home} />
    </Switch>
);

export default routes;