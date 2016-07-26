"use strict";

var React = require('react');
var Input = require('./common/textInput');

var Register = React.createClass({
    getInitialState: function() {
    return {value: 'Username'};
    },
    handleChange: function (e) {
        this.setState({value: e.target.value});

    },
    render: function(){
        return (
            <div className="text-center jumbotron">
                <image src="image/logo.png" width="200px" />
                <form>
                    <br />
                    <p><input type="text" name="username" label="" onChange={this.props.onChange} placeholder="Username"/></p>
                    <p><input type="text" name="username" label="" onChange={this.props.onChange} placeholder="Email"/></p>
                    <p><input type="password" name="password" label="" onCange={this.props.onChange} placeholder="Password"/> </p>
                    <p><input type="password" name="password" label="" onCange={this.props.onChange} placeholder="Retype password"/> </p>
                    <br />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        );
    }
});

module.exports = Register;

