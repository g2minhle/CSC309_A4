var
    React = require('react');

module.exports = Comment = React.createClass({
    getInitialState: function() {
        return {
            reviewerName: 'A User',
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get('/users/' + this.props.data.from, function(res) {
            this.setState({
                reviewerName: res.firstName + ' ' + res.lastName
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    
    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3>
                            <a href={'/users/pages/infoPage/' + this.props.data.from}>
                                {this.state.reviewerName}
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <b>Comment</b>
                    </div>
                    <div className="col-xs-11">
                        {this.props.data.comment}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <b>Rating</b>
                    </div>
                    <div className="col-xs-11">
                        {this.props.data.rating}
                    </div>
                </div>
            </div>
        );
    }
});