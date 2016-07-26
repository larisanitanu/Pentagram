"use strict";

var React = require('react');
var Input = require('./common/textInput');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
    getInitialState: function() {
    return {value: 'Username'};
    },
    handleChange: function (e) {
        this.setState({value: e.target.value});

    },
    render: function(){
        
        return (
            <div>
                <div className="text-center jumbotron">
                    <image src="image/logo.png" width="200px"/>
                    <form>
                        <br />
                        <p><input type="text" name="username" label="" onChange={this.props.onChange} placeholder="Username"/></p>
                        <p><input type="password" name="password" label="" onCange={this.props.onChange} placeholder="Password"/> </p>
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="text-center jumbotron">
                    Don't have an account? <Link to="registerPage">Sign up</Link>
                </div>
            </div>
        );
    }

});

module.exports = Login;