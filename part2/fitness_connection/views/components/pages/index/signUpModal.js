var
React = require('react'),

AlternativeAuthMethods = require('../../auth/alternativeAuthMethods'),  
ModalForm = require('../../modalForm'),
SignUpForm = require('../../auth/signUpForm');

module.exports = SignUpModal = React.createClass({
    render: function() {  return (
        <ModalForm id={this.props.id} title="Sign In">
            <div className="model-container">                
                <SignUpForm />
            </div>
        </ModalForm>
    );}
});