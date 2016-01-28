import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from '../components/App';
import IndexPage from '../pages/IndexPage';
import AppPage from '../pages/AppPage';
import test from '../pages/test'
import NotFoundPage from '../pages/NotFoundPage';

var routes = (
        <Route handler={App}>
            <DefaultRoute handler={AppPage}/>
            <Route handler={AppPage}>
                <DefaultRoute name="index" handler={IndexPage}/>
                <Route name="test" handler={test}/>
                <NotFoundRoute handler={NotFoundPage} />
            </Route>
        </Route>
        );

module.exports = routes;
