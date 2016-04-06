var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
Utilities = require('../../../../modules/utilities/utilities'),

Container = React.createClass({
    getInitialState: function() {
        return {
            matches: -1
        };
        
    },
 
    componentDidMount: function() {
        var url = window.location.href;
        var keyword = url.split('=').pop();

        this.serverRequest = $.get('./search/' + keyword, function (res) {
            console.log("setting state");
            this.setState( { matches: res });

        }.bind(this));
    },

    componentWillUnmount: function() {

        this.serverRequest.abort();
    },
 
    render: function() { 

        var trainerHTML = "";

        if (this.state.matches == -1) 
            trainerHTML = "";
        else if (this.state.matches.length == 0)
            trainerHTML = "No Results";
        else { 

            trainerHTML = this.state.matches.map(function(trainer) {
            
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
                                        {Utilities.getStarCode(trainer.rating)} ({trainer.comments.length} Reviews)
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
        }

        var url = window.location.href;
        var keyword = url.split('=').pop();

        // Sanitize to prevent XSS or injection
        keyword.replace("<", "");
        keyword.replace(">", "");

        return (
                    <div className="container">
                    <h1>Search results for: {keyword}</h1>
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
