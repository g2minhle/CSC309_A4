var
React = require('react'),

ModalForm = require('../../modalForm'),
ChangePasswordForm = require('../../changePassword/changePassword');

module.exports = ChangePasswordModal = React.createClass({


    render: function() {  

    	return (

        <ModalForm id={this.props.id} title="Change Password">
            <div className="model-container">                
                <ChangePasswordForm userId={this.props.userId}/>
            </div>
        </ModalForm>
    );}
});