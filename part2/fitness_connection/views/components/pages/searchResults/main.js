var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),

Container = React.createClass({
    getInitialState: function() {
        return {
            recommendations: [{
                                userid: -1,
                                firstName: '',
                                lastName: '',
                                isTrainer: true,
                                email: '',
                                phone: '',
                                sports: '',
                                experience: '',
                                location: '',
                                price: 0,
                                rating: 0,
                                education: '',
                                workexp: '',
                                comments: []
                                }]
        };
        
    },
 
    componentDidMount: function() {
        var url = window.location.href;
        var keyword = url.split('=').pop();

        console.log("going to perform search");
        this.serverRequest = $.get('./search/' + keyword, function (res) {
            console.log("setting state");
            this.setState( { recommendations: res });

        }.bind(this));
    },

    componentWillUnmount: function() {

        this.serverRequest.abort();
    },
 
    render: function() { 

        var trainerHTML = this.state.recommendations.map(function(trainer) {
            return (
                    <div className="trainer_bio">
                        <div className="row">
                            <div className="profile_left col-md-2">
                                <img className="img-circle profile_img" src="/statics/imgs/default_profile.jpg"/>
                            </div>
                            <div className="profile_center col-md-7">
                                <ul>
                                    <li><span className="font-bold">Name: </span> {trainer.firstName} {trainer.lastName}</li>
                                    <li><span className="font-bold">Sport: </span> {trainer.sports}</li>
                                    <li><span className="font-bold">Rating: </span>
                                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span> (2 Reviews)
                                    </li>

                                    <li><span className="font-italic">
                                        {trainer.experience}
                                        </span>
                                    </li>

                                    <li><span className="font-bold">Location: </span> {trainer.location}
                                    </li>
                                </ul>
                            </div>
                            <div className="profile_right col-md-3">
                                <h2>${trainer.price}</h2>
                                <a href="./profilePage.html" className="btn btn-lg btn-primary btn-block">View Profile</a>
                                <a href="./book.html" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                            </div>
                        </div>
                    </div>
                    );
        });

        return (
                    <div className="container">
                    <h1>Recommended Personal Trainers Near You</h1>
                    {trainerHTML};
                    </div>
                );
    }
}),/*


        <div className="trainer_bio">
            <div className="row">
                <div className="profile_left col-md-2">
                    <img className="img-circle profile_img" src="views/statics/imgs/default_profile.jpg">
                </div>
                <div className="profile_center col-md-7">
                    <ul>
                        <li><span className="font-bold">Name: </span> Ron Runner</li>
                        <li><span className="font-bold">Sport: </span> Cross-Country</li>
                        <!-- TODO: Make this cleaner? -->
                        <li><span className="font-bold">Rating: </span> 
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            (4 Reviews)
                        </li>

                        <li><span className="font-italic">
                            "GOTTA RUN FAST.  GO GO GO"</span>
                        </li>

                        <li><span className="font-bold">Location: </span> Longest Road, San Shoes (&lt; 25 km)
                        </li>
                    </ul>
                </div>
                <div className="profile_right col-md-3"> 
                    <h1>$15</h2>
                    <a href="./profilePage.html" className="btn btn-lg btn-primary btn-block">View Profile</a>
                    <a href="./book.html" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
        </div>

        <div className="trainer_bio">
            <div className="row">
                <div className="profile_left col-md-2">
                    <img className="img-circle profile_img" src="views/statics/imgs/default_profile.jpg">
                </div>
                <div className="profile_center col-md-7">
                    <ul>
                        <li><span className="font-bold">Name: </span> Mathew Basketcase</li>
                        <li><span className="font-bold">Sport: </span> Basketball</li>
                        <!-- TODO: Make this cleaner? -->
                        <li><span className="font-bold">Rating: </span> 
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                            (4 Reviews)
                        </li>

                        <li><span className="font-italic">
                            "Captain of the highschool basketball team.  Twice."</span>
                        </li>

                        <li><span className="font-bold">Location: </span> Los Balls, Basketland (&lt; 10 km)
                        </li>
                    </ul>
                </div>
                <div className="profile_right col-md-3"> 
                    <h1>$125</h2>
                    <a href="./profilePage.html" className="btn btn-lg btn-primary btn-block">View Profile</a>
                    <a href="./book.html" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
        </div>
    </div>




        <div className="container">
            <div className="row">
                <hr/>
                <div className="profile_left col-md-8">
                    <span className="font-bold">Name: </span> {this.state.recommendations[0].firstName} {this.state.recommendations[0].lastName}
                    <br />
                    <span className="font-bold">Location: </span> {this.state.recommendations[0].location}
                    <br />
                    <span className="font-bold">Email: </span> {this.state.recommendations[0].email}
                    <br />
                    <span className="font-bold">Phone #: </span> {this.state.recommendations[0].phone}
                    <br />
                    <br />
                    <div>
                        <span className="font-bold">Sport(s): </span> {this.state.recommendations[0].sports}
                        <br />
                        <span className="font-bold">Rating: {this.state.recommendations[0].rating} stars </span>
                        <br />
                        <span className="font-bold"> Experience: </span> {this.state.recommendations[0].experience}
                        <br />
                    </div>
                </div>
                <div className="profile_right col-md-2">
                    <h2>${this.state.recommendations[0].price}</h2>
                    <a href="../book" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="profile_left col-md-8">
                    <span className="font-bold"><h2>Resume </h2></span>
                    <span className="font-bold"> Education: </span> 
                    <br />
                    {this.state.recommendations[0].education}
                    <br />
                    <span className="font-bold"> Work Experience: </span>
                    <br /> 
                    {this.state.recommendations[0].workexp}
                    <br />
                    <hr />
                </div>
            </div>

        </div>
        
    ); }
}),*/

Index = React.createClass({
    render: function() { return (
        <div>
            <NormalNavBar/>                
            <Container />
        </div>
    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);
