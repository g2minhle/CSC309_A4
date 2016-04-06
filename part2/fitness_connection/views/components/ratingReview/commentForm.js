var
    React = require('react');

module.exports = CommentForm = React.createClass({
    getInitialState: function() {
        return {
            comment: '',
            rating: '1'
        };
    },
    handleCommentChange: function(e) {
        this.setState({ comment: e.target.value });
    },
    handleRatingChange: function(e) {
        this.setState({ rating: e.target.value });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var comment = this.state.comment.trim(),
            rating = this.state.rating.trim();
        if (!comment || !rating) {
            return;
        }
        this.props.onCommentSubmit({
            comment: comment,
            rating: rating
        });
        this.setState({
            comment: '',
            rating: '1'
        });
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-xs-8">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "Your review"
                            value = {this.state.comment}
                            onChange = {this.handleCommentChange}
                            />
                    </div>
                    <div className="col-xs-2">
                        <select
                            className = "form-control" 
                            value = {this.state.rating} 
                            onChange = {this.handleRatingChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-lg btn-primary btn-block">Post Review</button>
                    </div>
                </div>
            </form>
        );
    }
});