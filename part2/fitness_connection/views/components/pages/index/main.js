var
React = require('react'),
ReactDOM = require('react-dom'),

LandingBackground = require('./landingBackground'),
LandingPageGreeting = require('./landingPageGreeting'),
SignInModal = require('./signInModal'),
SignUpModal = require('./signUpModal'),

Index = React.createClass({
    openSignInModal: function (e) {
        $('#signInModal').modal('show');
    },
    openSignUpModal: function (e) {
        $('#signUpModal').modal('show');
    },
    render: function() {  return (
        <div>
            <LandingBackground />
            <LandingPageGreeting 
                openSignInModal={this.openSignInModal} 
                openSignUpModal={this.openSignUpModal}
            />
            <SignInModal id="signInModal" />
            <SignUpModal id="signUpModal" />            
        </div>
    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);