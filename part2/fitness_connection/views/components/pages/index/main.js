var
React = require('react'),
ReactDOM = require('react-dom'),

LandingBackground = require('./landingBackground'),
LandingPageGreeting = require('./landingPageGreeting'),
SignInModal = require('./signInModal'),

Index = React.createClass({
    openSignInModal: function (e) {
        $('#signInModal').modal(); 
        $('#signInModal').modal('show');
    },
    openSignUpModal: function (e) {
        $('#signUpForm').modal(); 
        $('#signUpForm').modal('show');
    },
    render: function() {  return (
        <div>
            <LandingBackground />
            <LandingPageGreeting 
                openSignInModal={this.openSignInModal} 
                openSignUpModal={this.openSignUpModal}
            />
            <SignInModal id="signInModal" />
        </div>
    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);