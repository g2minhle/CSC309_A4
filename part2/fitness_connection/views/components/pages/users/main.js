var
React = require('react'),
ReactDOM = require('react-dom'),

Navbar = React.createClass({
    render: function() { return (
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="./index.html" class="navbar-brand" href="#">Fitness Connection</a>
                    <form class="navbar-form navbar-left search-form" role="search">
                        <input type="text" class="form-control search-box" placeholder="crossfit" />
                        <a href="./searchResults.html" type="submit" class="btn btn-default">Search</a>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="./editPage.html">
                                My Account
                                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li>
                            <a href="./landingPage.html">
                                Sign Out
                                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    ); }
}),
    
Container = React.createClass({
    render: function() { return (
    
        <div class="container">
            <div class="row">
                <div class="profile_left col-md-2">
                    <img class="img-circle profile_img" src="images/default_profile.jpg" />
                </div>
                <div class="profile_center col-md-8">
                    <span class="font-bold">Name: </span> Mike Superswimmer
                    <br />
                    <span class="font-bold">Sport: </span> Swimming
                    <br />
                    <span class="font-bold">Rating: </span>
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span> (2 Reviews)
                    <br />
                    <span class="font-italic">
                        "I have been swimming for over 30 years, both recreationally and competitively. I was part of the 2016 Superland Olympic Swim Team and won countless gold medals.  I am clearly the best."</span>
                    <br />

                    <span class="font-bold">Location: </span> Swim Valley, Superland (&lt; 50 km)
                    <br />
                    <span class="font-bold"> Experience: </span>
                    <ul>
                        <li> Coached Michel Phelps for 5 years</li>
                        <li> Obama's Personal Trainer</li>
                        <li> Beyonce's Personal Trainer</li>
                    </ul>
                    <br />

                </div>
                <div class="profile_right col-md-2">
                    <h2>$99</h2>
                    <button class="btn btn-lg btn-primary btn-block">Message</button>
                    <a href="./book.html" class="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="profile_left col-md-8">
                    <span class="font-bold"><h2>Resume </h2></span>
                    <span class="font-bold"> Education: </span> Kinesiology from University of Toronto, Class of 1989
                    <br />
                    <span class="font-bold"> Work Experience: </span>
                    <ul>
                        <li> Helped Obama </li>
                        <li> Trained Beyonce</li>
                        <li> Trained Michel Phelps </li>
                        <li> part of the 2016 Superland Olympic Swim Team</li>
                    </ul>
                    <br />
                    <span class="font-bold"> Awards: </span>
                    <ul>
                        <li> Youth Olympics 1980 gold medalist</li>
                        <li> Olympics 1996 gold medalist</li>
                        <li> MVP 2006 </li>
                    </ul>
                    <br />
                    <hr />
                    <span class="font-bold"><h2>Reviews </h2></span>
                    <br />
                    <div class="profile_left col-md-2">
                        <img class="img-circle profile_img" src="images/default_profile_small.jpg" width="100" height="100" />
                    </div>
                    <div class="profile_center col-md-10">
                        <span class="font-bold"> Name: </span> Beyonce
                        <br />
                        <span class="font-bold"> Location: </span> New York(&lt;100km)
                        <br />
                        <span class="font-bold"> Profession: </span> Athlete
                        <br />
                        <span class="font-bold"> Review and Rating: </span> Mike is very helpful.
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </div>
                    <br />
                    <br />
                </div>
                <div class="profile_right col-md-4 well">
                    <h2>Availiability</h2>
                    <br /> Monday:10am -5pm
                    <br /> Wednesday:10am -5pm
                    <br /> Friday:10am -5pm
                </div>
            </div>

        </div>
        
    ); }
}),

Index = React.createClass({
    render: function() { return (
        <div>
            <Navbar />
            <Container />
        </div>

    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);
