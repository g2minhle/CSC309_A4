var 
React = require('react'),
Comment = require('./comment'),
CommentForm = require('./commentForm');

var 
CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <div className="col-xs-12">
            <Comment data={comment}/>
            <hr/>
        </div>
      );
    });
    return (
        <div className="row">
            {commentNodes}
        </div>
    );
  }
}),


CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/ratingReview/' + this.props.userId,
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
      url: '/ratingReview/',
      dataType: 'json',
      type: 'POST',
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
                <CommentList data={this.state.data} />
            </div> 
            <div className="col-xs-12">
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        </div>
    );
  }
});

module.exports = RatingReview = React.createClass({
    render: function() {
        return (                    
        <div className="row">
            <div className="col-xs-12">
                <h2>Comments</h2>
            </div> 
            <div className="col-xs-12">
                <CommentBox userId={this.props.userId} pollInterval={2000} />
            </div>
        </div>
    );}
});