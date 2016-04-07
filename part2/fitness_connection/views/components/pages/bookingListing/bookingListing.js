var 
React = require('react'),
Booking = require('./Booking');

var 
BookingList = React.createClass({
  render: function() {
    var bookingNodes = this.props.data.map(function(booking) {
      return (
        <div className="col-xs-12">
            <Booking data={booking}/>
            <hr/>
        </div>
      );
    });
    return (
        <div className="row">
            {bookingNodes}
        </div>
    );
  }
}),


BookingBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/booking/' + this.props.userId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    comment['userId'] = this.props.userId;
    comment.id = Date.now();
    $.ajax({
      url: '/booking/',
      dataType: 'json',
      type: 'DELETE',
      data: comment,
      success: function(data) {
        this.loadCommentsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        this.loadCommentsFromServer();
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
        <div className="row">
            <div className="col-xs-12">
                <BookingList data={this.state.data} />
            </div> 
        </div>
    );
  }
});

module.exports = BookingListing = React.createClass({
    render: function() {
        return (                    
        <div className="row">
            <div className="col-xs-12">
                <h2>My bookings</h2>
            </div> 
            <div className="col-xs-12">
                <BookingBox userId={this.props.userId} pollInterval={2000} />
            </div>
        </div>
    );}
});