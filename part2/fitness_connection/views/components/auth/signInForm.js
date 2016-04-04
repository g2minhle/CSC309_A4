var 
React = require('react'),
AlternativeAuthMethods = require('./alternativeAuthMethods');

module.exports = SignInForm = React.createClass({
    render: function() {  return (
        <div className="row">
            <div className="col-xs-12">
                {this.props.flash_message}
            </div>
            <div className="col-xs-12">
                <form action="/auth/local/login" method="post">
                    <link rel="stylesheet" href="/statics/css/components/auth.css"/>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="form-signin-heading">Sign in using password</h2>
                            <div className="row sign-up-item">
                                <div className="col-xs-12">
                                    <label for="inputEmail" className="sr-only">Username</label>
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
                                    <input value="remember-me" type="checkbox"/> Remember me 
                                </label>
                            </div>
                        </div>
                        <div className="col-xs-8 right-align">
                            <label>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                </form>            
                <hr/>
            </div>                                            
            <div className="col-xs-12">
                <AlternativeAuthMethods title="Or"/>
            </div>
        </div>
    );}
});