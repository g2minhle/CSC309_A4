var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
ChangePasswordModal = require('./changePasswordModal'),
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

        this.serverRequest = $.get('./admin/getAllUsers', function (res) {

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
                                <li className="col-md-3">{user._id}</li>
                                <li className="col-md-3">{user.firstName} {user.lastName}</li>
                                <ChangePasswordModal id="changePasswordModal" userId={user._id }/>                                
                                <li className="col-md-2"><button className="btn btn-primary" onClick={function () { $('#changePasswordModal').modal('show'); }}>Change password</button></li>
                                <li className="col-md-3"><button className="btn btn-danger">Remove user</button></li>
                            </ul>
                        </div>
                    </div>
                    );
        });


        return (
        <div className="container">
        <h1>Fitness Connection Admin page</h1>
        <button onClick={this.openChangePasswordModal}>Change password</button>
                                
            <div>
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Manage users</a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Manage database</a></li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="home">
                    <div className="row">
                        <ul>
                            <li className="col-md-3">Internal User ID</li>
                            <li className="col-md-3">User's Name</li>
                        </ul>
                    </div>                        
                    {userHTML}
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
