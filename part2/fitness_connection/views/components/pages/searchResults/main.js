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

        return (
    
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
