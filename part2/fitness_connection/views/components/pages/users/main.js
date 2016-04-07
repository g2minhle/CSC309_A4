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
            <div className="row">                
                <div className="col-xs-12">
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </div>
            </div>
            <div className="row">                
                <div className="col-xs-10">
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Location:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.location}
                        </div>
                    </div>       
                    
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Email:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.email}
                        </div>
                    </div>      
                    
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Phone:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.phone}
                        </div>
                    </div>   
                    
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Sport(s):</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.sports}
                        </div>
                    </div>   
                    
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Experience:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.experience}
                        </div>
                    </div>                          
                </div>
                <div hidden={!this.state.isTrainer} className="profile_right col-xs-2">
                    <h2>${this.state.price}</h2>
                    <a 
                        href={'/booking/pages/createBooking/' + this.props.userId} 
                        className="btn btn-lg btn-danger btn-block">
                        Book Now!
                    </a>
                </div>
                <div className="col-xs-12">
                    <hr />
                </div>
            </div>
            <div hidden={!this.state.isTrainer} className="row">
                <div className="col-xs-12">
                    <h2>Resume</h2> 
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Education:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.education}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 right-align">
                            <b>Work Experience:</b>
                        </div>
                        <div className="col-xs-10">
                            {this.state.workexp}
                        </div>
                    </div>                    
                    <hr />
                </div>
            </div>   
            <div hidden={!this.state.isTrainer} className="row">                
                <div className="col-xs-12">
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
