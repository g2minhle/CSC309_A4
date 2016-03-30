var
React = require('react'),
ReactDOM = require('react-dom'),
    
Container = React.createClass({
    saveChanges: function(e) {
        //make api request here to save changes
        e.preventDefault();

        var data = {
            "firstName": "req.firstName",
            "lastName": "req.lastName",
            "profilePictureURL": "req.profilePictureURL",
            "sports": "req.sports",
            "location": "req.location",
            "experience": "req.experience"
        }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: './savechanges',
            data: data
        })
        .done(function(data) {
            console.log('done');
        })
        .fail(function(jqXhr) {
            console.log('failed to register');
        });
    },
    changeProfilePicture: function(e) {
        //make api request here to change profile picture
    },
    render: function() { return (
    
        <div className="container">
            <div className="row">
                <div className="col-xs-2">
                    <img className="img-circle profile_img" src="images/default_profile.jpg" />
                </div>
                <div className="col-xs-2">
                    <button onClick={this.changeProfilePicture} type="button" className="btn btn-primary btn-block">Change Profile Photo</button>
                </div>
                <div className="col-xs-2">
                    <button onClick={this.saveChanges} type="button" className="btn btn-primary  btn-block">Save Changes</button>
                </div>
                <div className="col-xs-4">
                </div>
                
                
            </div>
            <hr/>
            <div className="row">
                <h3>User Details</h3>
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
                <h3>Resume</h3>
                <div className="col-xs-12">
                    <b>Education</b>
                    <textarea type="text" className="form-control" name="education">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Work Experience</b>
                    <textarea type="text" className="form-control" name="workexperience">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Awards</b>
                    <textarea type="text" className="form-control" name="awards">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Other Info</b>
                    <textarea type="text" className="form-control" name="otherinfo">
                    </textarea>
                </div>
                
            </div>
            <hr/>
            <div className="row">
                <h3>Availability</h3>
                <div className="col-xs-12">
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-5">
                        <h3>From</h3>
                    </div>
                    <div className="col-xs-5">
                        <h3>To</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Monday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Tuesday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Wednesday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Thursday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Friday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Saturday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Sunday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input type="time" className="form-control" />
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

// Function for if user presses save changes

