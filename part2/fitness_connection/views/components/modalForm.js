var
React = require('react');

module.exports = ModalForm = React.createClass({
    render: function() {  return (
        <div 
            className="modal fade in" 
            id={this.props.id} 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div> 
    );}
});