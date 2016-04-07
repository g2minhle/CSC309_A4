var
React = require('react'),
ReactDOM = require('react-dom'),
NormalNavBar = require('../../normalNavBar'),
BookingListing = require('./bookingListing');
    
var
BookingListingPage = React.createClass({
    render: function() { return (
        <div>
            <NormalNavBar />
            <div className="container">    
                <div className="row">
                    <div className="col-xs-12">
                        <BookingListing userId={userId}/>
                    </div>
                </div>                
            </div>
        </div>
    ); }
}),

userId = $('#userId').text();

ReactDOM.render(
    <BookingListingPage userId={userId}/>,
    document.getElementById('page-content')
);
