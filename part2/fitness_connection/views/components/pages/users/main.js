var
    React = require('react'),
    ReactDOM = require('react-dom'),
    NormalNavBar = require('../../normalNavBar'),
    RatingReview = require('../../ratingReview/ratingReview');

var
UserInfoPageContent = React.createClass({
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
            education: '',
            workexp: '',
            comments: []
        };
    },
 
    componentDidMount: function() {        
        this.serverRequest = $.get('/users/' + this.props.userId, function (res) {
            this.setState({
                userid: res.userid,
                firstName: res.firstName,
                lastName: res.lastName,
                isTrainer: res.isTrainer,
                email: res.email,
                phone: res.phone,
                sports: res.sports,
                experience: res.experience,
                location: res.location,
                price: res.price,
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
        return (
    
        <div className="container">
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <div className="row">                
                <div className="profile_left col-md-8">
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
                    <span className="font-bold"><h2>Resume</h2></span>
                    <span className="font-bold"> Education: </span> 
                    <br />
                    {this.state.education}
                    <br />
                    <span className="font-bold"> Work Experience: </span>
                    <br /> 
                    {this.state.workexp}
                    <br />
                    <hr />
                </div>
                <div className="col-md-12">
                    <RatingReview userId={this.props.userId}/>
                </div>                
            </div>

        </div>
        
    ); }
}),

UserInfoPage = React.createClass({
    render: function() { return (
        <div>
            <NormalNavBar/>                
            <UserInfoPageContent userId={this.props.userId}/>
        </div>
    ); }
}),

userId = $('#userId').text();

ReactDOM.render(
    <UserInfoPage userId={userId}/>,
    document.getElementById('page-content')
);
