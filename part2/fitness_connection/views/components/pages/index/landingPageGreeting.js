var
React = require('react'),
 
GreetingText = React.createClass({
    render: function() {  return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1 className="page-title">Fitness Connection</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h3>
                        Discover the perfect personal trainer for you!
                    </h3>
                </div>
            </div>
        </div>
    ); }
}),

GreetingButton = React.createClass({    
    render: function() {  return (
        <div className="col-xs-6">
            <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={this.props.onClick}>
                {this.props.buttonText}
            </button>
        </div>
    ); }
});

module.exports = LandingPageGreeting = React.createClass({
    render: function() { return (
        <div id="landing-page-greating">
            <GreetingText />
            <div className="row">
                <div className="col-xs-offset-4 col-xs-4">
                    <div className="row">
                        <GreetingButton 
                            onClick={this.props.openSignInModal} 
                            buttonText="Sign In"/>
                        <GreetingButton 
                            onClick={this.props.openSignUpModal} 
                            buttonText="Sign Up"/>
                    </div>
                </div>
            </div>
        </div>
    );}
});