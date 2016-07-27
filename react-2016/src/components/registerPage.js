"use strict";

var React = require('react');
var Input = require('./common/textInput');

var Register = React.createClass({
    getInitialState: function () {
        return {
            username: null
            , password: null
            , passwordRepeat: null
            , email: null
        };
    },
    userChangeHandler: function (e) {
        this.setState({username: e.target.value});

    },
    passwordChangeHandler: function (e) {
        this.setState({password: e.target.value});

    },
    passwordRepeatChangeHandler: function (e) {
        this.setState({passwordRepeat: e.target.value});

    },
    emailChangeHandler: function (e) {
        this.setState({email: e.target.value});

    },
    formSubmitHandler: function (e) {
        e.preventDefault();
        console.log(this.state);
        if (this.state.password === this.state.passwordRepeat) {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/users/'
                , type: 'POST'
                , data: this.state
                , success: function () {
                    console.log("User registration successfully completed!");
                }
                , error: function (response) {
                    console.log(response.responseJSON);
                }
            }).then(function (data) {
                //sessionStorage.setItem('authToken', data.token);
                //redir homepage
            });
        }
        else {
            console.log("Password doesn't match!");
        }

    },

    render: function () {
        return (
            <div className="text-center jumbotron">
                <image src="image/logo.png" width="200px"/>
                <form>
                    <br />
                    <p><input type="text" name="username" label="" onChange={this.userChangeHandler}
                              placeholder="Username"/></p>
                    <p><input type="text" name="email" label="" onChange={this.emailChangeHandler} placeholder="Email"/>
                    </p>
                    <p><input type="password" name="password" label="" onChange={this.passwordChangeHandler}
                              placeholder="Password" required/></p>
                    <p><input type="password" name="passwordRepeat" label=""
                              onChange={this.passwordRepeatChangeHandler}
                              placeholder="Confirm password" required/></p>
                    <br />
                    <button type="submit" className="button" onClick={this.formSubmitHandler}>Sign up</button>
                </form>
            </div>
        );
    }
});

module.exports = Register;

