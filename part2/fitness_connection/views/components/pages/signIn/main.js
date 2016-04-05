var
React = require('react'),
ReactDOM = require('react-dom'),

EmptyNavBar = require('../../emptyNavBar'), 
SignInForm = require('../../auth/signInForm'),

SignIn = React.createClass({
    render: function() {  return (
        <div>
            <EmptyNavBar />
            <div className="container">            
                <div className="row">   
                    <div className="col-xs-6 col-xs-offset-3">                         
                        <SignInForm flash_message={this.props.flash_message}/>            
                    </div>
                    <div className="col-xs-6 col-xs-offset-3 right-align">
                        <a href="/auth/signUp">Dont have an account? Sign up Here</a>
                    </div>
                </div>
            </div>
        </div>
    ); }
}),
 
flash_message = $('#flash-message').text();

ReactDOM.render(
    <SignIn flash_message={flash_message}/>,
    document.getElementById('page-content')
);