var
React = require('react'),
ReactDOM = require('react-dom'),

Container = React.createClass({
    getInitialState: function() {
        return {
            userid: -1,
            firstName: '',
            lastName: '',
            isTrainer: false,
            profilePictureURL: '',
            email: '',
            phone: '',
            sports: '',
            experience: '',
            location: ''
        };
    },
 
    componentDidMount: function() {
        var url = window.location.href;
        var id = url.split('/').pop();
        this.serverRequest = $.get('./fetch/' + id, function (res) {
            this.setState({
                userid: res.userid,
                firstName: res.firstName,
                lastName: res.lastName,
                isTrainer: res.isTrainer,
                profilePictureURL: res.profilePictureURL,
                email: res.email,
                phone: res.phone,
                sports: res.sports,
                experience: res.experience,
                location: res.location
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
 
    render: function() { return (
    
        <div className="container">
            <div className="row">
                <div className="profile_left col-md-2">
                    <img className="img-circle profile_img" src="images/default_profile.jpg" />
                </div>
                <div className="profile_center col-md-8">
                    <span className="font-bold">Name: </span> {this.state.firstName} {this.state.lastName}
                    <br />
                    <span className="font-bold">Sport(s): </span> {this.state.sports}
                    <br />
                    <span className="font-bold">Rating: </span>
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span> (2 Reviews)
                    <br />

                    <span className="font-bold">Location: </span> {this.state.location}
                    <br />
                    <span className="font-bold"> Experience: </span> {this.state.experience}
                    <br />
                    <span className="font-bold">Email: </span> {this.state.email}
                    <br />
                    <span className="font-bold">Phone #: </span> {this.state.phone}

                </div>
                <div className="profile_right col-md-2">
                    <h2>$99</h2>
                    <a href="../book" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="profile_left col-md-8">
                    <span className="font-bold"><h2>Resume </h2></span>
                    <span className="font-bold"> Education: </span> Kinesiology from University of Toronto, className of 1989
                    <br />
                    <span className="font-bold"> Work Experience: </span>
                    <ul>
                        <li> Helped Obama </li>
                        <li> Trained Beyonce</li>
                        <li> Trained Michel Phelps </li>
                        <li> part of the 2016 Superland Olympic Swim Team</li>
                    </ul>
                    <br />
                    <span className="font-bold"> Awards: </span>
                    <ul>
                        <li> Youth Olympics 1980 gold medalist</li>
                        <li> Olympics 1996 gold medalist</li>
                        <li> MVP 2006 </li>
                    </ul>
                    <br />
                    <span className="font-bold"> Other Info: </span>
                    <ul>
                        <li> Youth Olympics 1980 gold medalist</li>
                        <li> Olympics 1996 gold medalist</li>
                        <li> MVP 2006 </li>
                    </ul>
                    <hr />
                    <span className="font-bold"><h2>Reviews </h2></span>
                    <br />
                    <div className="profile_left col-md-2">
                        <img className="img-circle profile_img" src="images/default_profile_small.jpg" width="100" height="100" />
                    </div>
                    <div className="profile_center col-md-10">
                        <span className="font-bold"> Name: </span> Beyonce
                        <br />
                        <span className="font-bold"> Location: </span> New York(&lt;100km)
                        <br />
                        <span className="font-bold"> Profession: </span> Athlete
                        <br />
                        <span className="font-bold"> Review and Rating: </span> Mike is very helpful.
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </div>
                    <br />
                    <br />
                </div>
                <div className="profile_right col-md-4 well">
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
            <Container />
        </div>

    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);
