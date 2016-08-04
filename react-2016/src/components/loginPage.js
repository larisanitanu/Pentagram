"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: null
            , password: null
        };
    },
    userChangeHandler: function (e) {
        this.setState({username: e.target.value});

    },
    PasswordChangeHandler: function (e) {
        this.setState({password: e.target.value});

    },
    formSubmitHandler: function (e) {
        e.preventDefault();
        console.log(this.state);
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/login/'
            , type: 'POST'
            , data: this.state
            , error: function (response) {
                console.log(response.responseJSON.non_field_errors[0]);
            }
            , success: function () {
                console.log("User logged in successfully completed!");
            }
        }).then(function (data) {
            sessionStorage.setItem('authToken', data.token);
            Router.HashLocation.push("photos");
            //redir homepage
        });

    },
    render: function () {

        return (

            <div>
                <div className="text-center jumbotron">
                    <image src="image/logo.png" width="200px"/>
                    <form>
                        <br />
                        <p><input type="text" name="username" label="" onChange={this.userChangeHandler}
                                  placeholder="Username"/></p>
                        <p><input type="password" name="password" label="" onChange={this.PasswordChangeHandler}
                                  placeholder="Password"/></p>
                        <br />
                        <button className="button" type="submit" onClick={this.formSubmitHandler}>Login</button>
                        
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