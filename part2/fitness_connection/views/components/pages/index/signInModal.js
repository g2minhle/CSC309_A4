var
React = require('react'),

AlternativeAuthMethods = require('../../auth/alternativeAuthMethods'),  
ModalForm = require('../../modalForm'),
SignInForm = require('../../auth/signInForm');

module.exports = SignInModal = React.createClass({
    render: function() {  return (
        <ModalForm id={this.props.id} title="Sign In">
            <div className="model-container">                
                <SignInForm />
            </div>
        </ModalForm>
    );}
});