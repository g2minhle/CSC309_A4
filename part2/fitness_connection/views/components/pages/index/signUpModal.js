var
React = require('react'),

AlternativeAuthMethods = require('../../auth/alternativeAuthMethods'),  
ModalForm = require('../../modalForm'),

SignUpForm = React.createClass({
    render: function() {  return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="form-signin-heading">Sign up a new account</h2>
                    <div className="row sign-up-item">
                        <div className="col-xs-12">
                            <label for="inputEmail" className="sr-only">First name</label>
                            <input id="inputEmail" className="form-control" placeholder="First name" required="" autofocus="" type="email"/>
                        </div>
                    </div>
                    <div className="row sign-up-item">
                        <div className="col-xs-12">
                            <label for="inputEmail" className="sr-only">Last name</label>
                            <input id="inputEmail" className="form-control" placeholder="Last name" required="" autofocus="" type="email"/>
                        </div>
                    </div>
                    <div className="row sign-up-item">
                        <div className="col-xs-10">
                            <label for="inputEmail" className="sr-only">Your location</label>
                            <input id="inputEmail" className="form-control" placeholder="Your location" required="" autofocus="" type="email"/>
                        </div>
                        <div className="col-xs-1">
                            <a className="btn btn-primary btn-md">
                                <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <div className="row sign-up-item">
                        <div className="col-xs-12">
                            <label for="inputEmail" className="sr-only">Email</label>
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
                            <input value="remember-me" type="checkbox" /> Remember me 
                        </label>
                    </div>
                </div>
                <div className="col-xs-8 right-align">
                    <label>

                    </label>
                </div>
            </div>
            <a href="./index.html" className="btn btn-lg btn-primary btn-block">Sign up</a>
        </div>
    );}
});

module.exports = SignUpModal = React.createClass({
    render: function() {  return (
        <ModalForm id={this.props.id} title="Sign In">
            <div className="model-container">                
                <div className="row">
                    <div className="col-xs-12">
                        <SignUpForm />
                        <hr/>
                    </div>                                            
                    <div className="col-xs-12">
                        <AlternativeAuthMethods title="Or Sign In With"/>
                    </div>
                </div>
            </div>
        </ModalForm>
    );}
});