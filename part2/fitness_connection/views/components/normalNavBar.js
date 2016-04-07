var
React = require('react');

module.exports = NormalNavBar = React.createClass({
    gotoSearchPage: function(e){
        window.location.href = "/search?=" + $('#txt_searchText').val();
        e.preventDefault();
    },
    render: function() {  return (
       <nav className="navbar navbar-inverse">
        <link rel="stylesheet" href="/statics/css/components/normalNavBar.css"/>
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="/index">Fitness Connection</a>
                <form className="navbar-form navbar-left search-form" role="search" onSubmit={this.gotoSearchPage}>
                    <input 
                        id="txt_searchText"
                        className="form-control search-box" 
                        placeholder="Search" 
                        type="text"/>&nbsp;
                    <button type="submit" className="btn btn-default" >Search</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/booking/pages/my/bookings">
                            View my bookings &nbsp;
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/users/pages/my/infoPage">
                            View my profile &nbsp;
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/users/pages/my/editPage">
                            Edit my profile &nbsp;
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
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