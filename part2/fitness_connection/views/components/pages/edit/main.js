var
React = require('react'),
ReactDOM = require('react-dom'),
    
Container = React.createClass({
    saveChanges: function(e) {
        //make api request here to save changes
        e.preventDefault();

        var isTrainer = false;
        if (document.getElementById('isTrainer').checked) {
          isTrainer = true;
        }

        var availability = []
        if (document.getElementById('mondayfrom').value && document.getElementById('mondayto').value) {
            availability.push({
                from:document.getElementById('mondayfrom').value,
                to:document.getElementById('mondayto').value
            });
        }

        if (document.getElementById('tuesdayfrom').value && document.getElementById('tuesdayto').value) {
            availability.push({
                from:document.getElementById('tuesdayfrom').value,
                to:document.getElementById('tuesdayto').value
            });
        }

        if (document.getElementById('wednesdayfrom').value && document.getElementById('wednesdayto').value) {
            availability.push({
                from:document.getElementById('wednesdayfrom').value,
                to:document.getElementById('wednesdayto').value
            });
        }

        if (document.getElementById('thursdayfrom').value && document.getElementById('thursdayto').value) {
            availability.push({
                from:document.getElementById('thursdayfrom').value,
                to:document.getElementById('thursdayto').value
            });
        }

        if (document.getElementById('fridayfrom').value && document.getElementById('fridayto').value) {
            availability.push({
                from:document.getElementById('fridayfrom').value,
                to:document.getElementById('fridayto').value
            });
        }

        if (document.getElementById('saturdayfrom').value && document.getElementById('saturdayto').value) {
            availability.push({
                from:document.getElementById('saturdayfrom').value,
                to:document.getElementById('saturdayto').value
            });
        }

        if (document.getElementById('sundayfrom').value && document.getElementById('sundayto').value) {
            availability.push({
                from:document.getElementById('sundayfrom').value,
                to:document.getElementById('sundayto').value
            });
        }

        var url = window.location.href;
        var id = url.split('/').pop();

        var data = {
            "userid": id,
            "firstName": document.getElementById('firstName').value,
            "lastName": document.getElementById('lastName').value,
            "isTrainer": isTrainer,
            "profilePictureURL": "req.profilePictureURL",
            "sports": document.getElementById('sports').value,
            "location": document.getElementById('location').value,
            "experience": document.getElementById('experience').value,
            "trainerProfile.$.price": document.getElementById('price').value,
            "trainerProfile.$.availability": availability,
            "trainerProfile.$.education": document.getElementById('education').value,
            "trainerProfile.$.workexp": document.getElementById('workexp').value,
            "trainerProfile.$.awards": document.getElementById('awards').value,
            "trainerProfile.$.otherinfo": document.getElementById('otherinfo').value
        }

        // Submit form via jQuery/AJAX
        $.ajax({
            type: 'POST',
            url: './savechanges/3', // ADD USER ID HERE
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
    render: function() { 
       
        return (
    
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
                    <input id="firstName" className="form-control" placeholder="Given Name" />
                </div>
                <div className="col-xs-6">
                    <b>Family Name</b>
                    <input id="lastName" className="form-control" placeholder="Family Name" />
                </div>
                <div className="col-xs-6">
                    <b>Sport(s)</b>
                    <input id="sports" className="form-control" placeholder="Sport(s)" />
                </div>
                <div className="col-xs-6">
                    <b>Location</b>
                    <input id="location" className="form-control" placeholder="Location" />
                </div>
                <p></p>
                <div className="col-xs-12">
                    <b>Experience:</b>
                    <textarea id="experience" type="text" className="form-control" name="experience">
                    </textarea>
                </div>
            </div>
        
            <hr/>
            <div className="row">
                <h3>Are you a Trainer or an Athlete?</h3>
                <div className="col-xs-3">
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="isAthlete" value="false" defaultChecked />
                            Athlete
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="isTrainer" value="true" />
                        Trainer
                      </label>
                    </div>
                </div>
            </div>
        
            <hr/>
            <div className="row">
                <h3>Price to Charge in $</h3>
                <div className="col-xs-3">
                    <input id="price" type="number" className="form-control" />
                </div>
                <div className="col-xs-9">  
                </div>
            </div>
        
            <hr/>

            <div className="row">
                <h3>Resume</h3>
                <div className="col-xs-12">
                    <b>Education</b>
                    <textarea id="education" type="text" className="form-control" name="education">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Work Experience</b>
                    <textarea id="workexp" type="text" className="form-control" name="workexperience">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Awards</b>
                    <textarea id="awards" type="text" className="form-control" name="awards">
                    </textarea>
                </div>
                <div className="col-xs-12">
                    <b>Other Info</b>
                    <textarea id="otherinfo" type="text" className="form-control" name="otherinfo">
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
                        <input id="mondayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="mondayto" type="time" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-2">
                        <h4>Tuesday</h4>
                    </div>
                    <div className="col-xs-5">
                        <input id="tuesdayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="tuesdayto" type="time" className="form-control" />
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
                        <input id="wednesdayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="wednesdayto" type="time" className="form-control" />
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
                        <input id="thursdayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="thursdayto" type="time" className="form-control" />
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
                        <input id="fridayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="fridayto" type="time" className="form-control" />
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
                        <input id="saturdayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="saturdayto" type="time" className="form-control" />
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
                        <input id="sundayfrom" type="time" className="form-control" />
                    </div>
                    <div className="col-xs-5">
                        <input id="sundayto" type="time" className="form-control" />
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


