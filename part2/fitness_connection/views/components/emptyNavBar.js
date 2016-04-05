var
React = require('react');

module.exports = EmptyNavBar = React.createClass({
    render: function() {  return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Fitness Connection</a>
                </div>
            </div>
        </nav>
    );}
});