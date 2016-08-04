"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="loginPage">Login</Link></li>
                        <li><Link to="registerPage">Register</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
