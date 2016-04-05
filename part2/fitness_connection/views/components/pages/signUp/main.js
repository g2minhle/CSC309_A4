var
React = require('react'),
ReactDOM = require('react-dom'),

EmptyNavBar = require('../../emptyNavBar'),
SignUpForm = require('../../auth/signUpForm');

SignUp = React.createClass({
    render: function() {  return (
        <div>
            <EmptyNavBar />
            <div className="container">            
                <div className="row">   
                    <div className="col-xs-6 col-xs-offset-3">                         
                        <SignUpForm flash_message={this.props.flash_message}/>            
                    </div>
                    <div className="col-xs-6 col-xs-offset-3 right-align">
                        <a href="/auth/signIn">Already have an account? Sign in Here</a>
                    </div>
                </div>
            </div>        
        </div>
    ); }
});

flash_message = $('#flash-message').text();

ReactDOM.render(
    <SignUp flash_message={flash_message}/>,
    document.getElementById('page-content')
);