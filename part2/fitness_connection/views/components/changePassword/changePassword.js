var 
React = require('react'),
bcrypt = require('bcrypt-nodejs');

module.exports = ChangePassword = React.createClass({

    onSubmit: function(event) {

        var password = $('#password').val();
        var passwordConfirm = $('#passwordConfirm').val();
        if (password != passwordConfirm) {
            $("#passwordMatchMsg").html("Passwords do not match!");
            event.preventDefault();
        } else {
            // Make the submission to the database to change password

            // Hash password
            var hashedPw = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

            this.serverRequest = $.post('./admin/setPassword', { id: this.props.userId, password: hashedPw }, 
                function (res) {
                    console.log("received response from post!");
                }.bind(this));
        }

    },

    render: function() {

        var flash_message = null;
        if( this.props.flash_message
            && this.props.flash_message.trim().length > 0){
            flash_message = <div className="col-xs-12">
                <div class="alert alert-danger">{this.props.flash_message}</div>
            </div>;
        }        
        return (                    
        <div className="row">
            {flash_message}
            <div className="col-xs-12">
                <form name="passwordChangeForm" onSubmit={this.onSubmit}>
                   <div className="row">
                        <div className="col-xs-12">
                            <h2 className="form-signin-heading">Password Change</h2>
                            <div className="row passwordChange">
                                <div className="col-xs-12">
                                    <input id="password" className="form-control" placeholder="Password" type="password"/>
                                </div>
                            </div>
                            <div className="row passwordChangeConfirm">
                                <div className="col-xs-12">
                                    <input id="passwordConfirm" className="form-control" placeholder="Re-enter Password" type="password"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block">Submit</button>
                    <div id="passwordMatchMsg"></div>
                </form>            
                <hr/>
            </div>                                            
        </div>
    );}
});