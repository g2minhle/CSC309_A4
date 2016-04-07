var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
    
CreateBookingPage = React.createClass({
    getInitialState: function() {
        return {
            trainerName: 'A User',
        };
    },
    
    componentDidMount: function() {
        this.serverRequest = $.get('/users/' + this.props.userId, function(res) {
            this.setState({
                trainerName: res.firstName + ' ' + res.lastName
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    
    createAppoinment: function(){
        var data = {
           trainerId: this.props.userId,
           time: $('#input_time').val()
        };
        $.ajax({
            type: 'POST',
            url: '/booking/', 
            data: data
        })
        .done(function(data) {
            window.location.href = "/booking/pages/my/bookings";
        })
        .fail(function(jqXhr) {
            alert('Failed to book appointment');
        });
    },
    
    render: function() { return (
        <div>
            <NormalNavBar />
            <div className="container">
                <div className="row">                
                    <div className="col-xs-12">
                        <h1>Booking an appointment with {this.state.trainerName}</h1>
                    </div>
                    <div className="col-xs-12">
                        <div className="row">
                            <div className="col-xs-2">
                                Select appointment time:
                            </div>
                            <div className="col-xs-10">
                                  <input type="date" id="input_time"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <hr/>
                    </div>     
                    <div className="col-xs-12">
                        <button 
                            className="btn btn-lg btn-primary btn-block"
                            onClick={this.createAppoinment}>
                            Book the appointment
                        </button>
                    </div>                    
                </div>
            </div>
        </div>

    ); }
});

userId = $('#userId').text();

ReactDOM.render(
    <CreateBookingPage userId={userId}/>,
    document.getElementById('page-content')
);