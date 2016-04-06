var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),

Container = React.createClass({
    getInitialState: function() {
        return {
            userid: -1,
            firstName: '',
            lastName: '',
            isTrainer: false,
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
        };
    },
 
    componentDidMount: function() {
        var url = window.location.href;
        var id = url.split('/').pop();
        this.serverRequest = $.get('/users/' + id, function (res) {
            this.setState({
                userid: res.userid,
                firstName: res.firstName,
                lastName: res.lastName,
                isTrainer: (res.isTrainer == "true"),
                email: res.email,
                phone: res.phone,
                sports: res.sports,
                experience: res.experience,
                location: res.location,
                price: res.price,
                rating: res.rating,
                education: res.education,
                workexp: res.workexp,
                comments: res.comments
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
 
    render: function() { 
        var comments = [];
        var name;
        var rating;
        var comment;
        for (var i = 0; i < this.state.comments.length; i++) {
            name = this.state.comments[i]["name"];
            rating = this.state.comments[i]["rating"];
            comment = this.state.comments[i]["comment"];
            comments.push(
                <div><span className="font-bold"> Name: </span> {name}
                <br /><span className="font-bold"> Rating: </span> {rating} stars
                <br /><span className="font-bold"> Review: </span> {comment}
                <br /><br /></div>
           );

        }


        return (
    
        <div className="container">
            <div className="row">
                <hr/>
                <div className="profile_left col-md-8">
                    <span className="font-bold">Name: </span> {this.state.firstName} {this.state.lastName}
                    <br />
                    <span className="font-bold">Location: </span> {this.state.location}
                    <br />
                    <span className="font-bold">Email: </span> {this.state.email}
                    <br />
                    <span className="font-bold">Phone #: </span> {this.state.phone}
                    <br />
                    <br />
                    <div hidden={!this.state.isTrainer}>
                        <span className="font-bold">Sport(s): </span> {this.state.sports}
                        <br />
                        <span className="font-bold">Rating: {this.state.rating} stars </span>
                        <br />
                        <span className="font-bold"> Experience: </span> {this.state.experience}
                        <br />
                    </div>
                </div>
                <div hidden={!this.state.isTrainer} className="profile_right col-md-2">
                    <h2>${this.state.price}</h2>
                    <a href="../book" className="btn btn-lg btn-danger btn-block">Book Now!</a>
                </div>
            </div>
            <hr />
            <div hidden={!this.state.isTrainer} className="row">
                <div className="profile_left col-md-8">
                    <span className="font-bold"><h2>Resume </h2></span>
                    <span className="font-bold"> Education: </span> 
                    <br />
                    {this.state.education}
                    <br />
                    <span className="font-bold"> Work Experience: </span>
                    <br /> 
                    {this.state.workexp}
                    <br />
                    <hr />
                    <span className="font-bold"><h2>Reviews </h2></span>
                    {comments}
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
