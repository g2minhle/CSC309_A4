var 
React = require('react'),
AlternativeAuthMethods = require('./alternativeAuthMethods');

module.exports = SignUpForm = React.createClass({
    render: function() {  return (
        <div className="row">
            <div className="col-xs-12">
                {this.props.flash_message}
            </div>
            <div className="col-xs-12">
                <form action="/auth/local/signup" method="post">
                    <link rel="stylesheet" href="/statics/css/components/auth.css"/>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="form-signin-heading">Sign up a new account</h2>                    
                            <div className="row sign-up-item">
                                <div className="col-xs-12">
                                    <label for="inputEmail" className="sr-only">First name</label>
                                    <input id="inputEmail" className="form-control" placeholder="First name"/>
                                </div>
                            </div>
                            <div className="row sign-up-item">
                                <div className="col-xs-12">
                                    <label for="inputEmail" className="sr-only">Last name</label>
                                    <input id="inputEmail" className="form-control" placeholder="Last name"/>
                                </div>
                            </div>
                            <div className="row sign-up-item">
                                <div className="col-xs-10">
                                    <label for="inputEmail" className="sr-only">Your location</label>
                                    <input id="inputEmail" className="form-control" placeholder="Your location"/>
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
                                    <input name="email" className="form-control" placeholder="Email address" type="email"/>
                                </div>
                            </div>
                            <div className="row sign-up-item">
                                <div className="col-xs-12">
                                    <label for="inputPassword" className="sr-only">Password</label>
                                    <input name="password" className="form-control" placeholder="Password" type="password"/>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="checkbox">
                                <label>
                                </label>
                            </div>
                        </div>
                        <div className="col-xs-8 right-align">
                            <label>

                            </label>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block">Sign up</button>
                </form>
                <hr/>
            </div>                                            
            <div className="col-xs-12">
                <AlternativeAuthMethods title="Or"/>
            </div>
        </div>
    );}
});