"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/photosPage')}/>
        <Route name="home" handler={require('./components/homePage')}/>
        <Route name="photos" handler={require('./components/photosPage')}/>
        <Route name="photos/:id" handler={require('./components/photosPage')}/>
        <Route name="loginPage" handler={require('./components/loginPage')}/>
        <Route name="registerPage" handler={require('./components/registerPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
        // do the redirect if route fails
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;