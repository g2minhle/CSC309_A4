var
React = require('react'),

AlternativeAuthMethods = require('../../auth/alternativeAuthMethods'),  
ModalForm = require('../../modalForm'),

SignInForm = React.createClass({
    render: function() {  return (
        <div className="row">
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="form-signin-heading">Sign in using password</h2>
                        <div className="row sign-up-item">
                            <div className="col-xs-12">
                                <label for="inputEmail" className="sr-only">Username</label>
                                <input id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" type="email"/>
                            </div>
                        </div>
                        <div className="row sign-up-item">
                            <div className="col-xs-12">
                                <label for="inputPassword" className="sr-only">Password</label>
                                <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="checkbox">
                            <label>
                                <input value="remember-me" type="checkbox"/> Remember me 
                            </label>
                        </div>
                    </div>
                    <div className="col-xs-8 right-align">
                        <label>

                        </label>
                    </div>
                </div>
                <a href="./index.html" className="btn btn-lg btn-primary btn-block">Sign in</a>
            </div>
        </div>
    );}
});

module.exports = SignInModal = React.createClass({
    render: function() {  return (
        <ModalForm id={this.props.id} title="Sign In">
            <div className="model-container">
                <SignInForm />
                <hr/>
                <AlternativeAuthMethods title="Or Sign In With"/>
            </div>
        </ModalForm>

    );}
});