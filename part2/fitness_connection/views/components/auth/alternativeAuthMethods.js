var 
React = require('react'),

SignInWithFacebook = require('./signInWithFacebook'),
SignInWithGoogle = require('./signInWithGoogle');

module.exports = AlternativeAuthMethods = React.createClass({
    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="row">                                
                    <div className="col-xs-6 center-align">
                        <SignInWithFacebook />
                    </div>
                    <div className="col-xs-6 center-align">
                        <SignInWithGoogle />
                    </div>
                </div>
            </div>
        );
    }
});
