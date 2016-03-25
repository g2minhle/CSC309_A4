var
React = require('react'),
 
SignUpForm = React.createClass({
    render: function() {  return (
        <div className="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Sign Up</h4>
                </div>
                <div className="modal-body">
                    <div className="row model-container">
                        <h2 className="form-signin-heading">Or sign in with</h2>
                        <div className="col-xs-6 center-align">
                            <SignInWithGoogle />
                        </div>
                        <div className="col-xs-6 center-align">
                            <SignInWithFacebook />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    ); }
});