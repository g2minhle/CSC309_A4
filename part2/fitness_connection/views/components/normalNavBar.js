var
React = require('react');

module.exports = NormalNavBar = React.createClass({
    render: function() {  return (
       <nav className="navbar navbar-inverse">
        <link rel="stylesheet" href="/statics/css/components/normalNavBar.css"/>
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Fitness Connection</a>
                <form className="navbar-form navbar-left search-form" role="search">
                    <input className="form-control search-box" placeholder="Search" type="text"/>&nbsp;
                    <a href="./searchResults.html" type="submit" className="btn btn-default">Search</a>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="./editPage.html">
                            My Account &nbsp;
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/auth/logout">
                            Sign Out &nbsp;
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );}
});