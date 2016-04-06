var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
Utilities = require('../../../../modules/utilities/utilities'),

Container = React.createClass({
    getInitialState: function() {
        return {
            users: [{
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

        this.serverRequest = $.get('./admin/getAllUsers', function (res) {
            console.log("setting state");
            this.setState( { users: res });

        }.bind(this));
    },

    componentWillUnmount: function() {

        this.serverRequest.abort();
    },
 
    render: function() { 


        var userHTML = "";

        userHTML = this.state.users.map(function(user) {
            return (
                 <div className="row">
                        <div className="user_entry">    
                            <ul>
                                <li>{user._id}</li>
                                <li>{user.firstName} {user.lastName}</li>
                                <li><button className="btn btn-primary">Change password</button></li>
                                <li><button className="btn btn-danger">Remove user</button></li>
                            </ul>
                        </div>
                    </div>
                    );
        });


        return (
        <div className="container">
        <h1>Fitness Connection Admin page</h1>

            <div>
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Manage users</a></li>
                <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Manage database</a></li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane" id="home">
                    <div className="row">
                        <nav>
                            <ul className="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <ul>
                            <li>Internal User ID</li>
                            <li>User ID</li>
                            <li>User's Name</li>
                        </ul>
                    </div>                        
                    {userHTML}
                    <div className="row">
                        <nav>
                            <ul className="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
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
