var
React = require('react');
 
module.exports = SignInWithGoogle = React.createClass({
    render: function() {
        return (
            <a href="/auth/facebook/">
                <img src="./statics/imgs/auth/btn_google_signin_dark_normal_web.png" />
            </a>
        );
    }
});
