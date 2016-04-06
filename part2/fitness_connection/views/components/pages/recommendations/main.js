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

        this.serverRequest = $.get('./index/getRecommendations', function (res) {
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
                    {trainerHTML}
                    </div>
                );
    }
}),

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
