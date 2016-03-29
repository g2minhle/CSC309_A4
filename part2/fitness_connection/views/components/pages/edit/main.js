var
React = require('react'),
ReactDOM = require('react-dom'),

Container = React.createClass({
    render: function() { return (
    
        <div className="container">
            <div className="row">
                <div className="col-xs-2">
                    <img className="img-circle profile_img" src="images/default_profile.jpg" />
                </div>
                <div className="col-xs-2">
                    <button type="button" className="btn btn-primary btn-block">Change Profile Photo</button>
                </div>
                <div className="col-xs-2">
                    <button type="button" className="btn btn-primary  btn-block">Save Changes</button>
                </div>
                <div className="col-xs-4">
                </div>
                
                
            </div>
            <hr/>
            <div className="row">
                <div className="col-xs-6">
                    <b>Given Name</b>
                    <input className="form-control" placeholder="Given Name" />
                </div>
                <div className="col-xs-6">
                    <b>Family Name</b>
                    <input className="form-control" placeholder="Family Name" />
                </div>
                <div className="col-xs-6">
                    <b>Sport</b>
                    <input className="form-control" placeholder="Sport" />
                </div>
                <div className="col-xs-6">
                    <b>Location</b>
                    <input className="form-control" placeholder="Location" />
                </div>
                <p></p>
                <div className="col-xs-12">
                    <b>Experience:</b>
                    <textarea type="text" className="form-control" name="experience">
                    </textarea>
                </div>
            </div>
            <hr/>

            <div className="row">
                <div className="col-xs-12">
                    <b>Resume</b>
                    <textarea type="text" className="form-control" name="Resume"></textarea>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-xs-12">
                    <h2> Availability: </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Monday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Tuesday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Wednesday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Thursday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Friday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Saturday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h3>Sunday</h3>
                    </div>
                    <div className="col-xs-5">
                        <b>From</b>
                        <input className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <b>To</b>
                        <input className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>
        </div>
        
    ); }
}),

Index = React.createClass({
    render: function() { return (
        <div>
            
            <Container />
        </div>

    ); }
});

ReactDOM.render(
    <Index/>,
    document.getElementById('page-content')
);
