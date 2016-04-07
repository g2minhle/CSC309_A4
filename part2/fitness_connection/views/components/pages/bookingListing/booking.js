var
    React = require('react');

module.exports = Booking = React.createClass({
    getInitialState: function() {
        return {
            trainerName: 'A User',
            traineeName: 'A User'
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get('/users/' + this.props.data.trainerId, function(res) {
            this.setState({
                trainerName: res.firstName + ' ' + res.lastName
            });
        }.bind(this));

        this.serverRequest2 = $.get('/users/' + this.props.data.traineeId, function(res) {
            this.setState({
                traineeName: res.firstName + ' ' + res.lastName
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
        this.serverRequest2.abort();
    },

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1">
                        <b>Trainer</b>
                    </div>
                    <div className="col-xs-11">
                        <a href={'/users/pages/infoPage/' + this.props.data.trainerId}>
                            {this.state.trainerName}
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <b>Trainee</b>
                    </div>
                    <div className="col-xs-11">
                        <a href={'/users/pages/infoPage/' + this.props.data.traineeId}>
                            {this.state.traineeName}
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <b>Time</b>
                    </div>
                    <div className="col-xs-11">
                        {this.props.data.time}
                    </div>
                </div>
            </div>
        );
    }
});